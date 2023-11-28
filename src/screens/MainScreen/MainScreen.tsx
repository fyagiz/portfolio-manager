import { View } from "react-native";
import Dashboard from "../../components/Dashboard";
import styles from "./MainScreen.style";
import { MainScreenProps } from "./MainScreen.types";
const MainScreen = (props: MainScreenProps) => {
  const { style: propStyle } = props;
  return (
    <View style={[styles.container, propStyle]}>
      <Dashboard />
    </View>
  );
};

export default MainScreen;
