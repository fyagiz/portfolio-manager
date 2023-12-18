import { StyleProp, ViewStyle } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../utils/navigation";

export type PortfolioPropsType = NativeStackScreenProps<typeof RootStackParamList, "Portfolio"> & {
  style?: StyleProp<ViewStyle>;
};
