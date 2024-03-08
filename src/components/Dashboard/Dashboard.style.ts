import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

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
  modalContainer: {
    flex: 1,
    paddingVertical: "35%",
  },
  modalInnerContainer: {
    borderWidth: STYLE.borderWidth,
    borderRadius: STYLE.borderRadius,
    backgroundColor: COLOR.addStockFromIconColor,
    margin: STYLE.margin,
    padding: STYLE.padding,
  },
  textInputStyle: {
    borderRadius: STYLE.borderRadius,
    borderWidth: STYLE.borderWidth,
    padding: STYLE.padding,
  },
});
