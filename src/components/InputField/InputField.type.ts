import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type InputFieldModeType = "integer" | "float" | "capitalLetter";

export type InputFieldPropsType = {
  testID: string;
  inputText: string;
  mode: InputFieldModeType;
  textInputProps: TextInputProps;
  inputContainerStyle?: StyleProp<ViewStyle>;
};
