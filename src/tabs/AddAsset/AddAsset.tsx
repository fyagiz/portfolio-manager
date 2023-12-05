import { Text, TextInput, View } from "react-native";
import styles from "./AddAsset.style";
import { useState } from "react";

const AddAsset = () => {
  const [stockName, setStockName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [commision, setCommision] = useState<string>("");

  const handleFormatInput = (text: string, setFunction: React.Dispatch<React.SetStateAction<string>>, isOnlyNumber: boolean = true) => {
    let filteredText: string;
    if (isOnlyNumber) {
      filteredText = text.replace(/[^0-9]/g, "");
    } else {
      filteredText = text.replace(/[^a-zA-Z]/g, "");
    }
    setFunction(filteredText);
  };
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <View style={styles.textInputContainer}>
          <Text testID="stockNameText">Stock Name</Text>
          <TextInput testID="stockNameTextInput" onChangeText={text => handleFormatInput(text, setStockName, false)} value={stockName} style={styles.textInputStyle} keyboardType="ascii-capable" />
          <Text testID="amountText">Amount</Text>
          <TextInput testID="amountTextInput" onChangeText={text => handleFormatInput(text, setAmount)} value={amount} style={styles.textInputStyle} keyboardType="number-pad" />
          <Text testID="priceText">Price</Text>
          <TextInput testID="priceTextInput" onChangeText={text => handleFormatInput(text, setPrice)} value={price} style={styles.textInputStyle} keyboardType="decimal-pad" />
          <Text testID="comissionText">Commission</Text>
          <TextInput testID="comissionTextInput" onChangeText={text => handleFormatInput(text, setCommision)} value={commision} style={styles.textInputStyle} keyboardType="decimal-pad" />
          <Text testID="comissionText">Commission</Text>
          <TextInput testID="comissionTextInput" onChangeText={text => handleFormatInput(text, setCommision)} value={commision} style={styles.textInputStyle} keyboardType="decimal-pad" />
        </View>
      </View>
    </View>
  );
};

export default AddAsset;
