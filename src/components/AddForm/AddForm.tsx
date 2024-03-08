import { Alert, Keyboard, View } from "react-native";
import { AddFormPropsType, AddFormType } from "./AddForm.type";
import styles from "./AddForm.style";
import InputField from "../InputField";
import { ForwardedRef, forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { getDateString, getToday } from "../../utils/helpers";
import DatePicker from "../DatePicker";
import Button from "../Button";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { setIsLoading } from "../../store/slices/appSlice";
import { getBistStockPrice } from "../../utils/api";
import { AssetHistoryType } from "../../utils/assetTypes";
import { addStock } from "../../store/slices";

const AddForm = forwardRef<AddFormType, AddFormPropsType>((props: AddFormPropsType, ref: ForwardedRef<AddFormType>) => {
  const { testID } = props;
  const stockState = useAppSelector(state => state.stockState);
  const { stocks, bistStocks } = stockState;
  const dispatch = useAppDispatch();
  const [stockCode, setStockCode] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [commision, setCommision] = useState<string>("");
  const [date, setDate] = useState<Date>(getToday());

  const clearInputFields = useCallback(() => {
    if (stockCode.length > 0) setStockCode("");
    if (amount.length > 0) setAmount("");
    if (price.length > 0) setPrice("");
    if (commision.length > 0) setCommision("");
    if (date !== getToday()) setDate(getToday());
  }, [amount.length, commision.length, date, price.length, stockCode.length]);

  useImperativeHandle(ref, () => ({
    clearInputFields: () => {
      clearInputFields();
    },
  }));

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
      dispatch(setIsLoading(true));
      const stockAmount = Number(amount);
      const totalCost = Number(price) * stockAmount + Number(commision);
      const stockName = bistStocks.find(stock => stock.stockCode === stockCode)?.stockName;
      const stockPrice = await getBistStockPrice(stockCode);
      const historyObject: AssetHistoryType = {
        amount: stockAmount,
        assetCode: stockCode,
        commision: Number(commision),
        date: getDateString(date),
        price: Number(price),
        totalCost,
        transactionType: "BUY",
      };

      dispatch(
        addStock({
          stockName,
          stockCode,
          amount: stockAmount,
          totalCost,
          price: stockPrice,
          history: [historyObject],
        }),
      );
      Alert.alert("Success", "Asset is added.", [
        {
          text: "OK",
          onPress: () => {
            Keyboard.dismiss();
            clearInputFields();
            dispatch(setIsLoading(false));
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <InputField testID={`${testID}InputField`} inputText="Stock Name" mode="capitalLetter" textInputProps={{ value: stockCode, onChangeText: setStockCode, maxLength: 5 }} />
      <InputField testID={`${testID}InputField`} inputText="Amount" mode="integer" textInputProps={{ value: amount, onChangeText: setAmount }} />
      <InputField testID={`${testID}InputField`} inputText="Price" mode="float" textInputProps={{ value: price, onChangeText: setPrice }} />
      <InputField testID={`${testID}InputField`} inputText="Commission" mode="float" textInputProps={{ value: commision, onChangeText: setCommision }} />
      <DatePicker
        testID={`${testID}DatePicker`}
        text="Date"
        date={date}
        onChange={(selectedDate: Date) => setDate(selectedDate)}
        textInputStyle={styles.datePickerTextInputStyle}
      />
      <View style={styles.buttonContainer}>
        <Button testID="addAssetButton" text="Add" containerStyle={styles.buttonStyle} onPress={addAsset} />
      </View>
    </View>
  );
});

export default AddForm;
