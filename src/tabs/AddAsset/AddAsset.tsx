import { Keyboard, Pressable } from "react-native";
import styles from "./AddAsset.style";
import AddForm from "../../components/AddForm";

const AddAsset = () => {
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()} android_disableSound>
      <AddForm testID="AddAsset" />
    </Pressable>
  );
};

export default AddAsset;
