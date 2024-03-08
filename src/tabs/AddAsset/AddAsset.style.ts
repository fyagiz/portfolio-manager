import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
  },
  insideContainer: {
    padding: STYLE.padding,
  },
});
