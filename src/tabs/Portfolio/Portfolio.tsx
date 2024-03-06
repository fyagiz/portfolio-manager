import { View } from "react-native";
import Dashboard from "../../components/Dashboard";
import styles from "./Portfolio.style";
import { PortfolioPropsType } from "./Portfolio.type";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationType } from "../../utils/navigation";

const Portfolio = (props: PortfolioPropsType) => {
  const navigation = useNavigation<BottomTabNavigationType>();
  const { style: propStyle } = props;

  return (
    <View style={[styles.container, propStyle]}>
      <Dashboard navigation={navigation} />
    </View>
  );
};

export default Portfolio;
