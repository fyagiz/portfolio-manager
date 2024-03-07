import { KeyboardType, Text, TextInput, View } from "react-native";
import { InputFieldPropsType } from "./InputField.type";
import InputFieldValidations from "./validations/InputField.validation";
import styles from "./InputField.style";

const InputField = (props: InputFieldPropsType) => {
  const { testID, textInputProps, inputText, mode, inputContainerStyle } = props;
  let keyboardType: KeyboardType;

  const onChangeTextFunction = (newValue: string) => {
    const { onChangeText } = textInputProps;

    const validation = InputFieldValidations[mode](newValue);
    if (validation.isValid) {
      onChangeText?.(validation.validatedText);
    }
  };

  switch (mode) {
    case "capitalLetter":
      keyboardType = "default";
      break;
    case "float":
      keyboardType = "decimal-pad";
      break;
    case "integer":
      keyboardType = "number-pad";
      break;
    default:
      keyboardType = "default";
      break;
  }

  return (
    <View style={inputContainerStyle}>
      <Text testID={`${testID}InputField`}>{inputText}</Text>
      <TextInput
        testID={`${testID}TextInput`}
        {...textInputProps}
        style={[textInputProps.style, styles.textInputStyle]}
        onChangeText={newValue => {
          if (mode === "capitalLetter") newValue = newValue.toUpperCase();
          onChangeTextFunction(newValue);
        }}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default InputField;
