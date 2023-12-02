import { ReactNode } from "react";
import { ViewProps } from "react-native";

export type HeaderSafeContainerPropsType = {
  children: ReactNode;
  safeAreaViewProps?: ViewProps;
};
