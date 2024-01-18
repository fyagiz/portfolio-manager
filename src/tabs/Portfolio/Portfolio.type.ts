import { StyleProp, ViewStyle } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootBottomTabParamList } from "../../utils/navigation";

export type PortfolioPropsType = NativeStackScreenProps<typeof RootBottomTabParamList, "Portfolio"> & {
  style?: StyleProp<ViewStyle>;
};
