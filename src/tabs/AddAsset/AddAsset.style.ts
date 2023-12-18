import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
  },
  insideContainer: {
    backgroundColor: COLOR.backgroundColor,
    borderRadius: STYLE.borderRadius,
    padding: STYLE.padding,
  },
  textInputContainer: {
    padding: STYLE.padding,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textInputStyle: {
    borderRadius: STYLE.borderRadius,
    borderWidth: STYLE.borderWidth,
    padding: STYLE.padding,
  },
  buttonStyle: {
    width: 512,
    height: 32,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
