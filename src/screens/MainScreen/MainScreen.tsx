import { View } from "react-native";
import Dashboard from "../../components/Dashboard";
import styles from "./MainScreen.style";
import { MainScreenPropsType } from "./MainScreen.type";
import Button from "../../components/Button";
import AddAssetModal from "../../components/AddAssetModal";
import { useState } from "react";

const MainScreen = (props: MainScreenPropsType) => {
  const { style: propStyle } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, propStyle]}>
      <AddAssetModal
        modalProps={{
          visible: modalVisible,
          transparent: true,
          animationType: "slide",
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          text="Add Asset"
          onPress={() => {
            setModalVisible(prev => !prev);
          }}
        />
      </View>
      <Dashboard />
    </View>
  );
};

export default MainScreen;
