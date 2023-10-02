import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import Dashboard from "./screens/Dashboard";

const App = () => {
  return (
    <>
      <Dashboard />
      <StatusBar style="auto" />
    </>
  );
};

export default App;

registerRootComponent(App);
