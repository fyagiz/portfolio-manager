import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HeaderSafeContainer from "./components/HeaderSafeContainer";
import Portfolio from "./tabs/Portfolio";
import AddAsset from "./tabs/AddAsset";
import { COLOR, BOTTOM_TAB } from "./utils/constants";
import { RootStackParamList } from "./utils/navigation";
import { renderIcon } from "./utils/helpers";
import { Provider } from "react-redux";
import store from "./store";

const Tab = createBottomTabNavigator<typeof RootStackParamList>();

const App = () => {
  const { headerColor, tabBackgroundColor, tabBarActiveTintColor, tabBarInactiveTintColor } = COLOR;
  const { headerTitleAlign } = BOTTOM_TAB;

  return (
    <HeaderSafeContainer>
      <Provider store={store}>
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
              tabBarHideOnKeyboard: true,
            }}
          >
            <Tab.Screen
              name="Portfolio"
              component={Portfolio}
              options={{
                title: "Portfolio",
                tabBarIcon: ({ color, size }) => renderIcon({ iconType: "Ionicons", iconName: "wallet", color, size }),
              }}
            />
            <Tab.Screen
              name="AddAsset"
              component={AddAsset}
              options={{
                title: "Add Asset",
                tabBarIcon: ({ color, size }) => renderIcon({ iconType: "MaterialCommunityIcons", iconName: "bank-plus", color, size }),
              }}
            />
          </Tab.Navigator>
          <StatusBar style="dark" />
        </NavigationContainer>
      </Provider>
    </HeaderSafeContainer>
  );
};

export default App;

registerRootComponent(App);
