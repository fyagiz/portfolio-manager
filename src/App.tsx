import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HeaderSafeContainer from "./components/HeaderSafeContainer";
import { RootStackParamList } from "./utils/navigationTypes";
import { Colors } from "./utils/Colors";
import { tabBarConstants } from "./utils/tabBarConstants";
import renderIcon from "./utils/renderIcon";
import Portfolio from "./tabs/Portfolio";

const Tab = createBottomTabNavigator<RootStackParamList>();

const App = () => {
  const { headerColor, tabBackgroundColor, tabBarActiveTintColor, tabBarInactiveTintColor } = Colors;
  const { headerTitleAlign } = tabBarConstants;
  return (
    <HeaderSafeContainer>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: headerColor,
            },
            headerTitleAlign: headerTitleAlign,
            tabBarStyle: {
              backgroundColor: tabBackgroundColor,
            },
            tabBarActiveTintColor: tabBarActiveTintColor,
            tabBarInactiveTintColor: tabBarInactiveTintColor,
          }}
        >
          <Tab.Screen
            name="Portfolio"
            component={Portfolio}
            options={{
              title: "Portfolio",
              tabBarIcon: ({ color, size }) => renderIcon("wallet", color, size),
            }}
          />
        </Tab.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </HeaderSafeContainer>
  );
};

export default App;

registerRootComponent(App);
