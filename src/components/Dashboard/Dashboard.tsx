import { FlatList, Pressable } from "react-native";
import InvestmentCard from "../InvestmentCard";
import styles from "./Dashboard.style";
import { useAppSelector } from "../../utils/hooks";
import { StockType } from "../../utils/assetTypes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Dashboard = () => {
  const stockState = useAppSelector(state => state.stockState);
  const { stocks } = stockState;

  const renderItem = ({ item }: { item: StockType }) => {
    return <InvestmentCard investmentName={item.stockCode} profit="5000 TL" profitPercentage="15" />;
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
