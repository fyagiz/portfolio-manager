import { SafeAreaView } from "react-native";
import styles from "./HeaderSafeContainer.style";
import { HeaderSafeContainerPropsType } from "./HeaderSafeContainer.type";
const HeaderSafeContainer = (props: HeaderSafeContainerPropsType) => {
  const { children, safeAreaViewProps } = props;
  return (
    <SafeAreaView {...safeAreaViewProps} style={[styles.container, safeAreaViewProps?.style]}>
      {children}
    </SafeAreaView>
  );
};

export default HeaderSafeContainer;
