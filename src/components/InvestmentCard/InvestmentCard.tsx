import { Pressable, Text } from "react-native";
import { InvestmentCardPropsType } from "./InvestmentCard.type";
import styles from "./InvestmentCard.style";

const InvestmentCard = (props: InvestmentCardPropsType) => {
  const { investmentName, profit, profitPercentage, onPress, testOnly_pressed } = props;
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
      <Text testID="investmentName">{investmentName}</Text>
      <Text testID="profit">{profit}</Text>
      <Text testID="profitPercentage">% {profitPercentage}</Text>
    </Pressable>
  );
};

export default InvestmentCard;
