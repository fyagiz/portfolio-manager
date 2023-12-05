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
    borderWidth: styleConstants.borderRadius,
    padding: styleConstants.padding,
  },
  textInputContainer: {
    borderWidth: 2,
    padding: styleConstants.padding,
  },
  textInputStyle: {
    borderRadius: styleConstants.borderRadius,
    borderWidth: 2,
    padding: styleConstants.padding,
  },
});
