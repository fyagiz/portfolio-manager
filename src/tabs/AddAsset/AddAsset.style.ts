import { StyleSheet } from "react-native";
import { Colors, styleConstants } from "../../utils";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  insideContainer: {
    backgroundColor: Colors.backgroundColor,
    borderRadius: styleConstants.borderRadius,
    padding: styleConstants.padding,
  },
  textInputContainer: {
    padding: styleConstants.padding,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textInputStyle: {
    borderRadius: styleConstants.borderRadius,
    borderWidth: styleConstants.borderWidth,
    padding: styleConstants.padding,
  },
  buttonStyle: {
    width: 512,
    height: 32,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
