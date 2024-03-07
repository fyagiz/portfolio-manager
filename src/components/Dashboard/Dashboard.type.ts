import { Swipeable } from "react-native-gesture-handler";

export type SwipeableRefsType = Record<string, Swipeable>;

export type FlatListItemType = {
  stockCode: string;
  profit: string;
  profitPercentage: string;
};

export type DashboardType = {
  closeAllOpenedSwipeables: () => void;
};
