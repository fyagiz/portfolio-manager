import { GestureResponderEvent } from "react-native";

export type InvestmentCardProps = {
  investmentName: string;
  profit: string;
  profitPercentage: string;
  onPress?: (event: GestureResponderEvent) => void;
  testOnly_pressed?: boolean;
};
