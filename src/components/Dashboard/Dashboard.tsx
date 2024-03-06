import { Alert, FlatList, Modal, Pressable, Text, TextInput, View } from "react-native";
import InvestmentCard from "../InvestmentCard";
import styles from "./Dashboard.style";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { StockType } from "../../utils/assetTypes";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { renderIcon } from "../../utils/helpers";
import { COLOR, STYLE } from "../../utils/constants";
import { deleteStock } from "../../store/slices";
import { useEffect, useRef, useState } from "react";
import { DashboardPropsType, SwipeableRefsType } from "./Dashboard.type";

const Dashboard = (props: DashboardPropsType) => {
  const { navigation } = props;
  const stockState = useAppSelector(state => state.stockState);
  const { stocks } = stockState;
  const dispatch = useAppDispatch();
  const swipeableRefs = useRef<SwipeableRefsType>({});
  const [addStockFromIconState, setAddStockFromIconState] = useState({
    isVisible: false,
    stockCode: "",
  });

  useEffect(() => {
    const blurListener = navigation.addListener("blur", () => {
      closeAllOpenedSwipeables();
    });

    return blurListener;
  }, [navigation]);

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

  const renderAddStockFromIconModal = () => {
    return (
      <View>
        <Modal transparent animationType="slide">
          <Pressable style={{ flex: 1, justifyContent: "flex-end" }} onPress={() => setAddStockFromIconState(prevState => ({ ...prevState, isVisible: false }))}>
            <View style={{ borderWidth: STYLE.borderWidth, borderRadius: STYLE.borderRadius, height: "50%" }}>
              <Text testID="amountText">Amount</Text>
              <TextInput testID="amountTextInput" style={styles.textInputStyle} keyboardType="number-pad" />
              <Text testID="priceText">Price</Text>
              <TextInput testID="priceTextInput" style={styles.textInputStyle} keyboardType="decimal-pad" />
              <Text testID="comissionText">Commission</Text>
              <TextInput testID="comissionTextInput" style={styles.textInputStyle} keyboardType="decimal-pad" />
            </View>
          </Pressable>
        </Modal>
      </View>
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
      {addStockFromIconState.isVisible && renderAddStockFromIconModal()}
      <GestureHandlerRootView>
        <FlatList data={stocks} renderItem={renderItem} keyExtractor={stock => stock.stockCode} />
      </GestureHandlerRootView>
    </Pressable>
  );
};

export default Dashboard;
