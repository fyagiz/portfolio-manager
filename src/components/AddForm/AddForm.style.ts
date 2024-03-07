import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroundColor,
  },
  datePickerTextInputStyle: {
    borderRadius: STYLE.borderRadius,
    borderWidth: STYLE.borderWidth,
    padding: STYLE.padding,
  },
  insideContainer: {
    backgroundColor: COLOR.backgroundColor,
    borderRadius: STYLE.borderRadius,
    padding: STYLE.padding,
  },
  inputContainer: {
    padding: STYLE.padding,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    width: 512,
    height: 32,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
