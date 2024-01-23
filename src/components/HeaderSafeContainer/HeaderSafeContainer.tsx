import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderSafeContainerPropsType } from "./HeaderSafeContainer.type";

const HeaderSafeContainer = (props: HeaderSafeContainerPropsType) => {
  const { onLayout, children } = props;
  return <SafeAreaProvider onLayout={onLayout}>{children}</SafeAreaProvider>;
};

export default HeaderSafeContainer;
