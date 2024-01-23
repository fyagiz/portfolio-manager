import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "../../utils/navigation";

export type HandleFormatInputFormatType = "stockCode" | "amount" | "price";
export type NavigationType = BottomTabNavigationProp<typeof RootBottomTabParamList, "AddAsset">;
