import { ViewStyle } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils";

export type PortfolioPropsType = NativeStackScreenProps<typeof RootStackParamList, "Portfolio"> & {
  style?: ViewStyle;
};
