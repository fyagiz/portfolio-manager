import { View } from "react-native";
import Dashboard, { DashboardType } from "../../components/Dashboard";
import styles from "./Portfolio.style";
import { PortfolioPropsType } from "./Portfolio.type";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationType } from "../../utils/navigation";
import { useEffect, useRef } from "react";

const Portfolio = (props: PortfolioPropsType) => {
  const { style: propStyle } = props;
  const navigation = useNavigation<BottomTabNavigationType>();
  const dashboardRef = useRef<DashboardType>(null);

  useEffect(() => {
    const blurListener = navigation.addListener("blur", () => {
      dashboardRef.current?.closeAllOpenedSwipeables();
    });

    return blurListener;
  }, [navigation]);

  return (
    <View style={[styles.container, propStyle]}>
      <Dashboard ref={dashboardRef} />
    </View>
  );
};

export default Portfolio;
