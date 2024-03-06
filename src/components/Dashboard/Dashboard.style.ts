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
  swipeIconContainer: {
    margin: STYLE.margin,
    padding: STYLE.padding,
    borderRadius: STYLE.borderRadius,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputStyle: {
    borderRadius: STYLE.borderRadius,
    borderWidth: STYLE.borderWidth,
    padding: STYLE.padding,
  },
});
