import { StyleSheet } from "react-native";
import { COLOR, STYLE } from "../../utils/constants";

export default StyleSheet.create({
  iOScontainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  innerIOSContainer: {
    opacity: 1,
    backgroundColor: "black",
    borderRadius: STYLE.borderRadius,
  },
  iOSButtonStyle: {
    alignItems: "center",
    width: "100%",
    maxWidth: "auto",
  },
  textInputStyle: {
    color: COLOR.datePickerTextColor,
  },
});
