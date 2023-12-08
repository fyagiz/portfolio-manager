import { Keyboard, Pressable, Text, TextInput, View } from "react-native";
import styles from "./AddAsset.style";
import { useCallback, useEffect, useState } from "react";
import Button from "../../components/Button";
import { HandleFormatInputFormatType } from "./AddAsset.type";
import { useNavigation } from "@react-navigation/native";

const AddAsset = () => {
  const navigation = useNavigation();
  const [stockName, setStockName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [commision, setCommision] = useState<string>("");

  const clearInputFields = useCallback(() => {
    if (stockName.length > 0) setStockName("");
    if (amount.length > 0) setAmount("");
    if (price.length > 0) setPrice("");
    if (commision.length > 0) setCommision("");
  }, [amount.length, commision.length, price.length, stockName.length]);

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
      case "stockName":
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
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()} android_disableSound>
      <View style={styles.insideContainer}>
        <View style={styles.textInputContainer}>
          <Text testID="stockNameText">Stock Name</Text>
          <TextInput
            testID="stockNameTextInput"
            onChangeText={newValue => handleFormatInput(newValue, setStockName, "stockName")}
            value={stockName}
            style={styles.textInputStyle}
            keyboardType="default"
            maxLength={4}
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
            <Button text="Add" containerStyle={styles.buttonStyle} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default AddAsset;
