import { DatePickerPropsType } from "./DatePicker.type";
import { Modal, Platform, Pressable, Text, View, TextInput } from "react-native";
import { getBeforeDateByDay, getDateString, getToday } from "../../utils/helpers";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import Button from "../Button";
import styles from "./DatePicker.style";

const DatePicker = (props: DatePickerPropsType) => {
  const { text, date, onChange, textInputStyle, testID } = props;
  const [localDate, setLocalDate] = useState(date);
  const [isVisible, setIsVisible] = useState(false);
  const MAXIMUM_DATE = getToday();
  const MINIMUM_DATE = getBeforeDateByDay(MAXIMUM_DATE, 30);

  const onChangeAndroid = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setIsVisible(false);
    onChange(selectedDate!);
  };

  const onChangeIOS = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setLocalDate(selectedDate!);
  };

  const renderAndroidDatePicker = () => {
    return (
      isVisible && (
        <View>
          <View>
            <DateTimePicker
              testID={`${testID}DatePicker`}
              value={date}
              onChange={onChangeAndroid}
              mode="date"
              display="spinner"
              minimumDate={MINIMUM_DATE}
              maximumDate={MAXIMUM_DATE}
            />
          </View>
        </View>
      )
    );
  };

  const pressOutside = () => {
    setIsVisible(false);
  };

  const iOSConfirmButton = () => {
    onChange(localDate);
    setIsVisible(false);
  };

  const renderIOSDatePicker = () => {
    return (
      isVisible && (
        <Modal transparent animationType="slide">
          <Pressable style={styles.iOScontainer} onPress={pressOutside}>
            <View style={styles.innerIOSContainer}>
              <DateTimePicker
                testID={`${testID}DatePicker`}
                value={date}
                onChange={onChangeIOS}
                mode="date"
                display="spinner"
                minimumDate={MINIMUM_DATE}
                maximumDate={MAXIMUM_DATE}
              />
              <View>
                <Button testID={`${testID}DatePickerIOSButton`} text="Confirm" onPress={iOSConfirmButton} containerStyle={styles.iOSButtonStyle} />
              </View>
            </View>
          </Pressable>
        </Modal>
      )
    );
  };

  return (
    <View>
      <Text>{text}</Text>
      <Pressable
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <View pointerEvents="none">
          <TextInput style={[styles.textInputStyle, textInputStyle]} editable={false} value={getDateString(date)} />
        </View>
      </Pressable>
      {Platform.OS === "android" ? renderAndroidDatePicker() : renderIOSDatePicker()}
    </View>
  );
};

export default DatePicker;
