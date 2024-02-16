import { Pressable, Text } from "react-native";
import { ButtonPropsType } from "./Button.type";
import styles from "./Button.style";
import { COLOR } from "../../utils/constants";

const Button = (props: ButtonPropsType) => {
  const { text, onPress, testOnly_pressed, containerStyle, textStyle, testID } = props;
  const { buttonColor, pressedButtonColor } = COLOR;
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
      testID={`${testID}ButtonPressable`}
      testOnly_pressed={testOnly_pressed}
    >
      <Text testID={`${testID}ButtonText`} style={textStyle}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
