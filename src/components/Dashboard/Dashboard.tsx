import { View } from "react-native";
import InvestmentCard from "../InvestmentCard";
import styles from "./Dashboard.style";
import { useAppSelector } from "../../utils/hooks";

const Dashboard = () => {
  const stockState = useAppSelector(state => state.stockState);
  const { stocks } = stockState;

  const renderStocks = () => {
    return stocks.map(stock => <InvestmentCard investmentName={stock.name} profit="5000 TL" profitPercentage="15" />);
  };

  return <View style={styles.container}>{renderStocks()}</View>;
};

export default Dashboard;
