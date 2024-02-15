import { DatePickerPropsType } from "./DatePicker.type";
import { Modal, Platform, Pressable, Text, View, TextInput } from "react-native";
import { getDateString } from "../../utils/helpers";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { useState } from "react";
import Button from "../Button";

const DatePicker = (props: DatePickerPropsType) => {
  const { text, date, onChange, textInputStyle } = props;
  const [isVisible, setIsVisible] = useState(false);

  const onChangeFirst = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (Platform.OS === "android") {
      setIsVisible(false);
    }
    onChange(selectedDate!);
  };

  const renderAndroidDatePicker = () => {
    console.log("android");
    return (
      isVisible && (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={{ opacity: 1, backgroundColor: "black" }}>
            <DateTimePicker value={date} onChange={onChangeFirst} mode="date" display="spinner" />
          </View>
        </View>
      )
    );
  };

  const renderIOSDatePicker = () => {
    console.log("iOS");
    return (
      isVisible && (
        <Modal transparent>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <View style={{ opacity: 1, backgroundColor: "black" }}>
              <DateTimePicker value={date} onChange={onChangeFirst} mode="date" display="spinner" />
              <Button
                text="Confirm"
                onPress={() => {
                  setIsVisible(false);
                }}
              />
            </View>
          </View>
        </Modal>
      )
    );
  };

  return (
    <View>
      <Text>{text}</Text>
      <Pressable
        onPress={() => {
          console.log("bastim-", Platform.OS);
          setIsVisible(true);
        }}
      >
        <View pointerEvents="none">
          <TextInput style={textInputStyle} editable={false} value={getDateString(date)} />
        </View>
      </Pressable>
      {Platform.OS === "android" ? renderAndroidDatePicker() : renderIOSDatePicker()}
    </View>
  );
};

export default DatePicker;
