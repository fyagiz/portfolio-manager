import { Keyboard, Pressable } from "react-native";
import styles from "./AddAsset.style";
import AddForm, { AddFormType } from "../../components/AddForm";
import { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationType } from "../../utils/navigation";

const AddAsset = () => {
  const navigation = useNavigation<BottomTabNavigationType>();
  const addFormRef = useRef<AddFormType>(null);

  useEffect(() => {
    const blurListener = navigation.addListener("blur", () => {
      addFormRef.current?.clearInputFields();
    });

    return blurListener;
  }, [navigation]);

  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()} android_disableSound>
      <AddForm ref={addFormRef} testID="AddAsset" />
    </Pressable>
  );
};

export default AddAsset;
