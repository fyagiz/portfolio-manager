import { Pressable, Text } from "react-native";
import { ButtonPropsType } from "./Button.type";
import styles from "./Button.style";
import { Colors } from "../../utils";

const Button = (props: ButtonPropsType) => {
  const { text, onPress, testOnly_pressed, containerStyle, textStyle } = props;
  const { buttonColor, pressedButtonColor } = Colors;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
        },
        containerStyle,
      ]}
      onPress={onPress}
      testID="pressable"
      testOnly_pressed={testOnly_pressed}
    >
      <Text testID="buttonText" style={textStyle}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
