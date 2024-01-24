import { Pressable, Text, View } from "react-native";
import { InvestmentCardPropsType } from "./InvestmentCard.type";
import styles from "./InvestmentCard.style";
import { COLOR } from "../../utils/constants";

const InvestmentCard = (props: InvestmentCardPropsType) => {
  const { investmentName, profit, profitPercentage, onPress, onLongPress, testOnly_pressed } = props;
  const { investmentCardColor, pressedInvestmentCardColor } = COLOR;
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? pressedInvestmentCardColor : investmentCardColor,
        },
      ]}
      onPress={onPress}
      testID="pressable"
      testOnly_pressed={testOnly_pressed}
      onLongPress={onLongPress}
    >
      <Text testID="investmentName">{investmentName}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text testID="profit">Profit: {profit}</Text>
        <Text testID="profitPercentage">% {profitPercentage}</Text>
      </View>
    </Pressable>
  );
};

export default InvestmentCard;
