import { ReactNode } from "react";
import { ViewProps } from "react-native";

export type HeaderSafeContainerProps = {
  children: ReactNode;
  safeAreaViewProps?: ViewProps;
};
