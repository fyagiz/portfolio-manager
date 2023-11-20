import { View } from "react-native";
import InvestmentCard from "../InvestmentCard";
import styles from "./Dashboard.style";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <InvestmentCard investmentName="Test Fund" profit="5000 TL" profitPercentage="5" />
      <InvestmentCard investmentName="Test Fund2" profit="1000 TL" profitPercentage="6" />
      <InvestmentCard investmentName="Test Fund3" profit="1500 TL" profitPercentage="6" />
    </View>
  );
};

export default Dashboard;
