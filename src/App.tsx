import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import HeaderSafeContainer from "./components/HeaderSafeContainer";
import MainScreen from "./screens/MainScreen";

const App = () => {
  return (
    <HeaderSafeContainer>
      <StatusBar style="dark" />
      <MainScreen />
    </HeaderSafeContainer>
  );
};

export default App;

registerRootComponent(App);
