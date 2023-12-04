import { ViewStyle } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/navigationTypes";

export type PortfolioPropsType = NativeStackScreenProps<RootStackParamList, "Portfolio"> & {
  style?: ViewStyle;
};
