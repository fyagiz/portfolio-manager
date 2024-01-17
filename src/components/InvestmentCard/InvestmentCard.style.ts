import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    margin: STYLE.margin,
    padding: STYLE.padding,
    borderRadius: STYLE.borderRadius,
  },
  swipeContainer: {
    flexDirection: "row",
  },
  swipeDeleteElement: {
    justifyContent: "center",
    alignItems: "center",
  },
  swipeDeleteText: {
    color: COLOR.tabBarInactiveTintColor,
  },
});
