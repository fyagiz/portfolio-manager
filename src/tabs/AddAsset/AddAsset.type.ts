import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "../../utils/navigation";

export type HandleFormatInputFormatType = "stockName" | "amount" | "price";
export type NavigationType = BottomTabNavigationProp<typeof RootBottomTabParamList, "AddAsset">;
