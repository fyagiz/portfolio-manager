import { GestureResponderEvent } from "react-native";

export type InvestmentCardPropsType = {
  investmentName: string;
  profit: string;
  profitPercentage: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  testOnly_pressed?: boolean;
};
