import { GestureResponderEvent } from "react-native";

export type ButtonPropsType = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  testOnly_pressed?: boolean;
};
