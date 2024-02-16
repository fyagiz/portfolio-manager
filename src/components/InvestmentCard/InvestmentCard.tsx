import { Pressable, Text, View } from "react-native";
import { InvestmentCardPropsType } from "./InvestmentCard.type";
import styles from "./InvestmentCard.style";
import { COLOR } from "../../utils/constants";

const InvestmentCard = (props: InvestmentCardPropsType) => {
  const { investmentName, profit, profitPercentage, onPress, onLongPress, testOnly_pressed, testID } = props;
  const { investmentCardColor, pressedInvestmentCardColor } = COLOR;
  const profitNumber = Number(profit);
  const profitPercentageNumber = Number(profitPercentage);
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? pressedInvestmentCardColor : investmentCardColor,
        },
      ]}
      onPress={onPress}
      testID={`${testID}InvestmentCardPressable`}
      testOnly_pressed={testOnly_pressed}
      onLongPress={onLongPress}
    >
      <Text testID={`${testID}InvestmentCardInvestmentName`}>{investmentName}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text testID={`${testID}InvestmentCardProfitText`}>Profit: </Text>
          <Text testID={`${testID}InvestmentCardProfitNumber`} style={profitNumber > 0 ? styles.profitText : styles.lossText}>
            {profit}
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Text testID={`${testID}InvestmentCardPercentageText`}>% </Text>
          <Text testID={`${testID}InvestmentCardPercentageNumber`} style={profitPercentageNumber > 0 ? styles.profitText : styles.lossText}>
            {profitPercentage}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default InvestmentCard;
