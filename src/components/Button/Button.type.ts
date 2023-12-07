import { GestureResponderEvent, ViewStyle, StyleProp, TextStyle } from "react-native";

export type ButtonPropsType = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  testOnly_pressed?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
