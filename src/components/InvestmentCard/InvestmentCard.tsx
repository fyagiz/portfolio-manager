import { Pressable, Text } from "react-native";
import { InvestmentCardProps } from "./InvestmentCard.types";
import styles from "./InvestmentCard.style";

const InvestmentCard = (props: InvestmentCardProps) => {
  const { investmentName, profit, profitPercentage, onPress, testOnly_pressed } = props;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? "red" : "white",
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
