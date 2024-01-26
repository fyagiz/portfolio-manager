import { Alert, FlatList, Pressable, View } from "react-native";
import InvestmentCard from "../InvestmentCard";
import styles from "./Dashboard.style";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { StockType } from "../../utils/assetTypes";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { renderIcon } from "../../utils/helpers";
import { COLOR } from "../../utils/constants";
import { deleteStock } from "../../store/slices";
import { useRef } from "react";
import { SwipeableRefsType } from "./Dashboard.type";

const Dashboard = () => {
  const stockState = useAppSelector(state => state.stockState);
  const { stocks } = stockState;
  const dispatch = useAppDispatch();
  const swipeableRefs = useRef<SwipeableRefsType>({});

  const renderRightActions = () => {
    return (
      <View style={styles.swipeContainer}>
        <Pressable style={[styles.swipeDeleteContainer, styles.swipeDeleteElement]}>
          {renderIcon({ color: COLOR.swipeDeleteIconColor, iconName: "trash", iconType: "Ionicons", size: 36 })}
        </Pressable>
      </View>
    );
  };

  const onSwipeableOpen = (stockCode: string) => {
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
      },
    ]);
    swipeableRefs.current[stockCode]?.close();
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
    const profit = calculateProfit(item);
    return (
      <Swipeable ref={ref => (swipeableRefs.current[item.stockCode] = ref!)} renderRightActions={renderRightActions} onSwipeableOpen={() => onSwipeableOpen(item.stockCode)}>
        <InvestmentCard investmentName={item.stockCode} profit={profit.value} profitPercentage={profit.percentage} />
      </Swipeable>
    );
  };

  return (
    <Pressable style={styles.container}>
      <GestureHandlerRootView>
        <FlatList data={stocks} renderItem={renderItem} keyExtractor={stock => stock.stockCode} />
      </GestureHandlerRootView>
    </Pressable>
  );
};

export default Dashboard;
