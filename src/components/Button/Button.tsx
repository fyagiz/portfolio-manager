import { Pressable, Text } from "react-native";
import { ButtonPropsType } from "./Button.type";
import styles from "./Button.style";

const Button = (props: ButtonPropsType) => {
  const { text, onPress, testOnly_pressed } = props;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? "#F9DDA4" : "#F3CC79",
        },
      ]}
      onPress={onPress}
      testID="pressable"
      testOnly_pressed={testOnly_pressed}
    >
      <Text testID="buttonText">{text}</Text>
    </Pressable>
  );
};

export default Button;
