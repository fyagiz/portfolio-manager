import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderSafeContainerPropsType } from "./HeaderSafeContainer.type";

const HeaderSafeContainer = (props: HeaderSafeContainerPropsType) => {
  const { children } = props;
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default HeaderSafeContainer;
