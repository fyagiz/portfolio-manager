import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export const RootBottomTabParamList = {
  Portfolio: undefined,
  AddAsset: undefined,
};

export type BottomTabNavigationType = BottomTabNavigationProp<typeof RootBottomTabParamList>;
