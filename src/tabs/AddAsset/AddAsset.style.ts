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
  textInputStyle: {
    borderRadius: styleConstants.borderRadius,
    borderWidth: styleConstants.borderWidth,
    padding: styleConstants.padding,
  },
});
