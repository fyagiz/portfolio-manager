import { Alert, FlatList, Modal, Pressable, View } from "react-native";
import InvestmentCard from "../InvestmentCard";
import styles from "./Dashboard.style";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { StockType } from "../../utils/assetTypes";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { renderIcon } from "../../utils/helpers";
import { COLOR } from "../../utils/constants";
import { deleteStock } from "../../store/slices";
import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { DashboardType, SwipeableRefsType } from "./Dashboard.type";
import AddForm from "../AddForm";

const Dashboard = forwardRef<DashboardType>((_, dashbordRef: ForwardedRef<DashboardType>) => {
  const stockState = useAppSelector(state => state.stockState);
  const { stocks } = stockState;
  const dispatch = useAppDispatch();
  const swipeableRefs = useRef<SwipeableRefsType>({});
  const [addStockFromIconState, setAddStockFromIconState] = useState({
    isVisible: false,
    stockCode: "",
  });

  useImperativeHandle(dashbordRef, () => ({
    closeAllOpenedSwipeables: () => {
      closeAllOpenedSwipeables();
    },
  }));

  useEffect(() => {
    if (addStockFromIconState.isVisible) closeAllOpenedSwipeables();
  }, [addStockFromIconState.isVisible]);

  const renderRightActions = (stockCode: string) => {
    return (
      <View style={styles.swipeContainer}>
        <Pressable style={[styles.swipeIconContainer]} onPress={() => deleteStockFromIcon(stockCode)}>
          {renderIcon({ color: COLOR.swipeDeleteIconColor, iconName: "trash", iconType: "Ionicons", size: 36 })}
        </Pressable>
        <Pressable style={[styles.swipeIconContainer]} onPress={() => removeStockFromIcon(stockCode)}>
          {renderIcon({ color: COLOR.swipeRemoveIconColor, iconName: "remove-circle-sharp", iconType: "Ionicons", size: 36 })}
        </Pressable>
        <Pressable style={[styles.swipeIconContainer]} onPress={() => addStockFromIcon(stockCode)}>
          {renderIcon({ color: COLOR.swipeAddIconColor, iconName: "add-circle-sharp", iconType: "Ionicons", size: 36 })}
        </Pressable>
      </View>
    );
  };

  const deleteStockFromIcon = (stockCode: string) => {
    Alert.alert("Delete", `${stockCode} Delete?`, [
      {
        text: "Delete",
        onPress: () => {
          dispatch(deleteStock(stockCode));
          delete swipeableRefs.current[stockCode];
        },
      },
      {
        text: "Cancel",
        onPress: () => {
          swipeableRefs.current[stockCode]?.close();
        },
      },
    ]);
  };

  const addStockFromIcon = (stockCode: string) => {
    // console.log("add-", stockCode);
    setAddStockFromIconState({ isVisible: true, stockCode });
  };

  const removeStockFromIcon = (stockCode: string) => {
    console.log("remove-", stockCode);
  };

  const calculateProfit = (stock: StockType) => {
    const { amount, totalCost, price } = stock;
    const { current, previousDayClose } = price!;
    let profitLossNumber = 0;
    let profitLossPercentage = 0;
    const currentPriceNumber = Number(current);
    const amountNumber = Number(amount);
    const totalCostNumber = Number(totalCost);

    if (currentPriceNumber === 0) {
      const previousDayCloseNumber = Number(previousDayClose);
      profitLossNumber = previousDayCloseNumber * amountNumber - totalCostNumber;
      profitLossPercentage = (profitLossNumber / totalCostNumber) * 100;
    } else {
      profitLossNumber = currentPriceNumber * amountNumber - totalCostNumber;
      profitLossPercentage = (profitLossNumber / totalCostNumber) * 100;
    }

    return {
      value: profitLossNumber.toFixed(2),
      percentage: profitLossPercentage.toFixed(2),
    };
  };

  const renderItem = ({ item }: { item: StockType }) => {
    const { stockCode } = item;
    const profit = calculateProfit(item);
    return (
      <Swipeable
        ref={ref => (swipeableRefs.current[item.stockCode] = ref!)}
        renderRightActions={() => renderRightActions(stockCode)}
        onSwipeableWillOpen={() => {
          closeOtherOpenedSwipeables(item.stockCode);
        }}
      >
        <InvestmentCard testID={item.stockCode} investmentName={item.stockCode} profit={profit.value} profitPercentage={profit.percentage} />
      </Swipeable>
    );
  };

  const onClickOutsideModal = (isComingFromAddStockFromIconModal: boolean) => {
    if (isComingFromAddStockFromIconModal) {
      setAddStockFromIconState(prevState => ({ ...prevState, isVisible: false }));
    } else {
    }
  };

  const renderAddStockFromIconModal = () => {
    return (
      <Modal transparent animationType="slide">
        <Pressable style={styles.modalContainer} onPress={() => onClickOutsideModal(true)}>
          <Pressable style={styles.modalInnerContainer}>
            <AddForm testID="addStockFromIconModal" />
          </Pressable>
        </Pressable>
      </Modal>
    );
  };

  const closeAllOpenedSwipeables = () => {
    Object.keys(swipeableRefs.current).forEach((stockCode: string) => {
      if (swipeableRefs.current[stockCode].state.rowState !== 0) {
        swipeableRefs.current[stockCode].close();
      }
    });
  };

  const closeOtherOpenedSwipeables = (openedSwipeableStockCode: string) => {
    Object.keys(swipeableRefs.current).forEach((stockCode: string) => {
      if (swipeableRefs.current[stockCode].state.rowState !== 0 && stockCode !== openedSwipeableStockCode) {
        swipeableRefs.current[stockCode].close();
      }
    });
  };

  return (
    <Pressable style={styles.container} onPress={closeAllOpenedSwipeables}>
      <GestureHandlerRootView>
        <FlatList data={stocks} renderItem={renderItem} keyExtractor={stock => stock.stockCode} />
        {addStockFromIconState.isVisible && renderAddStockFromIconModal()}
      </GestureHandlerRootView>
    </Pressable>
  );
});

export default Dashboard;
