import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    margin: STYLE.margin,
    padding: STYLE.padding,
    borderRadius: STYLE.borderRadius,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "row",
  },
  profitText: {
    color: COLOR.profitColor,
  },
  lossText: {
    color: COLOR.lossColor,
  },
});
