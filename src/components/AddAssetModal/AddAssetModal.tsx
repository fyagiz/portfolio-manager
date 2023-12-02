import { Modal, Text, View } from "react-native";
import { AddAssetModalPropsType } from "./AddAssetModal.type";
import styles from "./AddAssetModal.style";

const AddAssetModal = (props: AddAssetModalPropsType) => {
  const { modalProps } = props;
  return (
    <Modal {...modalProps}>
      <View style={styles.container}>
        <View style={{ backgroundColor: "white", borderRadius: 4 }}>
          <Text>Example Modal</Text>
        </View>
      </View>
    </Modal>
  );
};

export default AddAssetModal;
