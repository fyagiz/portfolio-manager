import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.loadingBackgroundColor,
    opacity: STYLE.opacity,
  },
});
