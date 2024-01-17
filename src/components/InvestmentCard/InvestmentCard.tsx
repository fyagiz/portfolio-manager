import { Pressable, Text, View } from "react-native";
import { InvestmentCardPropsType } from "./InvestmentCard.type";
import styles from "./InvestmentCard.style";
import { COLOR } from "../../utils/constants";
import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { Swipeable } from "react-native-gesture-handler";
import { renderIcon } from "../../utils/helpers";

const InvestmentCard = (props: InvestmentCardPropsType) => {
  const { investmentName, profit, profitPercentage, onPress, testOnly_pressed } = props;
  const { investmentCardColor, pressedInvestmentCardColor } = COLOR;
  const swipeableRef = useRef<Swipeable>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const blurListener = navigation.addListener("blur", () => {
      swipeableRef.current?.close();
    });

    return blurListener;
  }, [navigation]);

  const renderRightActions = () => {
    return (
      <View style={styles.swipeContainer}>
        <Pressable style={[styles.container, styles.swipeDeleteElement]}>
          {renderIcon({ color: COLOR.swipeDeleteColor, iconName: "trash", iconType: "Ionicons", size: 36 })}
        </Pressable>
      </View>
    );
  };

  const onSwipeableOpen = () => {
    swipeableRef.current?.close();
  };
  return (
    <Swipeable renderRightActions={renderRightActions} ref={swipeableRef} onSwipeableOpen={onSwipeableOpen}>
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed ? pressedInvestmentCardColor : investmentCardColor,
          },
          { borderWidth: 5 },
        ]}
        onPress={onPress}
        testID="pressable"
        testOnly_pressed={testOnly_pressed}
        onLongPress={() => swipeableRef.current?.openRight()}
      >
        <Text testID="investmentName">{investmentName}</Text>
        <Text testID="profit">{profit}</Text>
        <Text testID="profitPercentage">% {profitPercentage}</Text>
      </Pressable>
    </Swipeable>
  );
};

export default InvestmentCard;
