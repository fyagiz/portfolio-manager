import { Alert, Pressable, Text, View } from "react-native";
import { InvestmentCardPropsType } from "./InvestmentCard.type";
import styles from "./InvestmentCard.style";
import { COLOR } from "../../utils/constants";
import { useRef } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { renderIcon } from "../../utils/helpers";
import { useAppDispatch } from "../../utils/hooks";
import { deleteStock } from "../../store/reducers";

const InvestmentCard = (props: InvestmentCardPropsType) => {
  const { investmentName, profit, profitPercentage, onPress, testOnly_pressed } = props;
  const { investmentCardColor, pressedInvestmentCardColor } = COLOR;
  const swipeableRef = useRef<Swipeable>(null);
  const dispatch = useAppDispatch();

  const renderRightActions = () => {
    return (
      <View style={styles.swipeContainer}>
        <Pressable style={[styles.container, styles.swipeDeleteElement]}>
          {renderIcon({ color: COLOR.swipeDeleteIconColor, iconName: "trash", iconType: "Ionicons", size: 36 })}
        </Pressable>
      </View>
    );
  };

  const onSwipeableOpen = () => {
    Alert.alert("Delete", `${investmentName} Delete?`, [
      {
        text: "Delete",
        onPress: () => {
          dispatch(deleteStock(investmentName));
        },
      },
      {
        text: "Cancel",
      },
    ]);
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
        ]}
        onPress={onPress}
        testID="pressable"
        testOnly_pressed={testOnly_pressed}
        onLongPress={() => swipeableRef.current?.openRight()}
      >
        <Text testID="investmentName">{investmentName}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text testID="profit">Profit: {profit}</Text>
          <Text testID="profitPercentage">% {profitPercentage}</Text>
        </View>
      </Pressable>
    </Swipeable>
  );
};

export default InvestmentCard;
