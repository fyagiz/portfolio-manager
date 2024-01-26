import { Alert, Keyboard, Pressable, Text, TextInput, View } from "react-native";
import styles from "./AddAsset.style";
import { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import { HandleFormatInputFormatType, NavigationType } from "./AddAsset.type";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { addStock } from "../../store/slices";
import { getBistStockPrice } from "../../utils/api";

const AddAsset = () => {
  const navigation = useNavigation<NavigationType>();
  const stockState = useAppSelector(state => state.stockState);
  const { stocks, bistStocks } = stockState;
  const [stockCode, setStockCode] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [commision, setCommision] = useState<string>("");
  const dispatch = useAppDispatch();

  const clearInputFields = useCallback(() => {
    if (stockCode.length > 0) setStockCode("");
    if (amount.length > 0) setAmount("");
    if (price.length > 0) setPrice("");
    if (commision.length > 0) setCommision("");
  }, [amount.length, commision.length, price.length, stockCode.length]);

  useEffect(() => {
    const blurListener = navigation.addListener("blur", () => {
      clearInputFields();
    });

    return blurListener;
  }, [navigation, clearInputFields]);

  const handleFormatInput = (newValue: string, setFunction: React.Dispatch<React.SetStateAction<string>>, keyboardType: HandleFormatInputFormatType) => {
    let filteredText!: string;
    let regexp: RegExp;
    let isChange = false;

    switch (keyboardType) {
      case "stockCode":
        regexp = /^$|^[a-zA-Z]+$/;
        if (regexp.test(newValue)) {
          filteredText = newValue.toUpperCase();
          isChange = true;
        }
        break;
      case "amount":
        filteredText = newValue;
        regexp = /^$|^\d+$/;
        if (regexp.test(newValue)) {
          filteredText = newValue;
          isChange = true;
        }
        break;
      case "price":
        filteredText = newValue;
        regexp = /^([0-9]{1,})?(\.)?([0-9]{1,6})?$|^([0-9]{1,})?(,)?([0-9]{1,6})?$/;
        if (regexp.test(newValue)) {
          filteredText = newValue;
          isChange = true;
        }
        filteredText = newValue;
        break;
      default:
        filteredText = newValue;
        break;
    }
    if (isChange) {
      setFunction(filteredText);
    }
  };

  const isAssetValid = () => {
    const isStockCodeValid = !!bistStocks.find(stock => stock.stockCode === stockCode);
    const isStockInPortfolio = !!stocks.find(stock => stock.stockCode === stockCode);

    if (!isStockCodeValid) {
      Alert.alert("Error", "Stock is not in BIST.", [
        {
          text: "OK",
          onPress: () => {
            Keyboard.dismiss();
            clearInputFields();
          },
        },
      ]);
      return false;
    } else if (isStockInPortfolio) {
      Alert.alert("Error", "Stock is in the Portfolio..", [
        {
          text: "OK",
          onPress: () => {
            Keyboard.dismiss();
            clearInputFields();
          },
        },
      ]);
      return false;
    }

    return true;
  };

  const addAsset = async () => {
    const isValid = isAssetValid();

    if (isValid) {
      const stockAmount = Number(amount);
      const totalCost = Number(price) * stockAmount + Number(commision);
      const stockName = bistStocks.find(stock => stock.stockCode === stockCode)?.stockName;
      const stockPrice = await getBistStockPrice(stockCode);

      dispatch(
        addStock({
          stockName,
          stockCode,
          amount: stockAmount,
          totalCost,
          price: stockPrice,
        }),
      );
      Alert.alert("Success", "Asset is added.", [
        {
          text: "OK",
          onPress: () => {
            Keyboard.dismiss();
            clearInputFields();
          },
        },
      ]);
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()} android_disableSound>
      <View style={styles.insideContainer}>
        <View style={styles.textInputContainer}>
          <Text testID="stockNameText">Stock Name</Text>
          <TextInput
            testID="stockNameTextInput"
            onChangeText={newValue => handleFormatInput(newValue, setStockCode, "stockCode")}
            value={stockCode}
            style={styles.textInputStyle}
            keyboardType="default"
            maxLength={5}
          />
          <Text testID="amountText">Amount</Text>
          <TextInput
            testID="amountTextInput"
            onChangeText={newValue => handleFormatInput(newValue, setAmount, "amount")}
            value={amount}
            style={styles.textInputStyle}
            keyboardType="number-pad"
          />
          <Text testID="priceText">Price</Text>
          <TextInput
            testID="priceTextInput"
            onChangeText={newValue => handleFormatInput(newValue, setPrice, "price")}
            value={price}
            style={styles.textInputStyle}
            keyboardType="decimal-pad"
          />
          <Text testID="comissionText">Commission</Text>
          <TextInput
            testID="comissionTextInput"
            onChangeText={newValue => handleFormatInput(newValue, setCommision, "price")}
            value={commision}
            style={styles.textInputStyle}
            keyboardType="decimal-pad"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <Button text="Add" containerStyle={styles.buttonStyle} onPress={addAsset} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default AddAsset;
