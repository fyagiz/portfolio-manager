import { ReactNode } from "react";
import { LayoutChangeEvent } from "react-native";

export type HeaderSafeContainerPropsType = {
  children: ReactNode;
  onLayout?: (event: LayoutChangeEvent) => void;
};
