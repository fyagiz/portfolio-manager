import { StyleSheet } from "react-native";
import { STYLE } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: STYLE.borderRadius,
    margin: STYLE.margin,
  },
  swipeContainer: {
    flexDirection: "row",
  },
  swipeDeleteContainer: {
    margin: STYLE.margin,
    padding: STYLE.padding,
    borderRadius: STYLE.borderRadius,
  },
  swipeDeleteElement: {
    justifyContent: "center",
    alignItems: "center",
  },
});
