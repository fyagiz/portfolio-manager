import { TextInputProps } from "react-native";

export type InputFieldModeType = "integer" | "float" | "capitalLetter";

export type InputFieldPropsType = {
  testID: string;
  inputText: string;
  mode: InputFieldModeType;
  textInputProps: TextInputProps;
};
