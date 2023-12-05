import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HeaderSafeContainer from "./components/HeaderSafeContainer";
import Portfolio from "./tabs/Portfolio";
import AddAsset from "./tabs/AddAsset";
import { Colors, RootStackParamList, renderIcon, tabBarConstants } from "./utils";

const Tab = createBottomTabNavigator<typeof RootStackParamList>();

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
    </HeaderSafeContainer>
  );
};

export default App;

registerRootComponent(App);
