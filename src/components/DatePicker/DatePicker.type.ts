import { StyleProp, TextStyle } from "react-native";

export type DatePickerPropsType = {
  text: string;
  textInputStyle: StyleProp<TextStyle>;
  date: Date;
  onChange: (selectedDate: Date) => void;
  testID: string;
};
