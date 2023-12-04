import { View } from "react-native";
import Dashboard from "../../components/Dashboard";
import styles from "./Portfolio.style";
import { PortfolioPropsType } from "./Portfolio.type";

const Portfolio = (props: PortfolioPropsType) => {
  const { style: propStyle } = props;

  return (
    <View style={[styles.container, propStyle]}>
      <Dashboard />
    </View>
  );
};

export default Portfolio;
