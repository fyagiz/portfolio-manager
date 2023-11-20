import { SafeAreaView } from "react-native";
import styles from "./HeaderSafeContainer.style";
import { HeaderSafeContainerProps } from "./HeaderSafeContainer.types";
const HeaderSafeContainer = (props: HeaderSafeContainerProps) => {
  const { children, safeAreaViewProps } = props;
  return (
    <SafeAreaView {...safeAreaViewProps} style={[styles.container, safeAreaViewProps?.style]}>
      {children}
    </SafeAreaView>
  );
};

export default HeaderSafeContainer;
