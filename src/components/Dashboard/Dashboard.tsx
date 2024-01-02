import { FlatList, View } from "react-native";
import InvestmentCard from "../InvestmentCard";
import styles from "./Dashboard.style";
import { useAppSelector } from "../../utils/hooks";
import { StockType } from "../../utils/assetTypes";

const Dashboard = () => {
  const stockState = useAppSelector(state => state.stockState);
  const { stocks } = stockState;

  const renderItem = ({ item }: { item: StockType }) => {
    return <InvestmentCard investmentName={item.name} profit="5000 TL" profitPercentage="15" />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={stocks} renderItem={renderItem} keyExtractor={stock => stock.name} />
    </View>
  );
};

export default Dashboard;
