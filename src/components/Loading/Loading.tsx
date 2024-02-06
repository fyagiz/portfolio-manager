import { ActivityIndicator, Modal, View } from "react-native";
import STYLE from "./Loading.style";
import { LoadingsPropsType } from "./Loading.type";

const Loading = (props: LoadingsPropsType) => {
  const { isLoading } = props;

  return (
    <Modal visible={isLoading} transparent>
      <View style={STYLE.container}>
        <ActivityIndicator size={"large"} />
      </View>
    </Modal>
  );
};

export default Loading;
