import { Swipeable } from "react-native-gesture-handler";
import { BottomTabNavigationType } from "../../utils/navigation";

export type SwipeableRefsType = Record<string, Swipeable>;

export type FlatListItemType = {
  stockCode: string;
  profit: string;
  profitPercentage: string;
};

export type DashboardPropsType = {
  navigation: BottomTabNavigationType;
};
