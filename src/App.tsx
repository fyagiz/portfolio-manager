import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HeaderSafeContainer from "./components/HeaderSafeContainer";
import Portfolio from "./tabs/Portfolio";
import AddAsset from "./tabs/AddAsset";
import { COLOR, BOTTOM_TAB } from "./utils/constants";
import { RootBottomTabParamList } from "./utils/navigation";
import { renderIcon } from "./utils/helpers";
import { Provider } from "react-redux";
import store from "./store";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { getBistStocks } from "./utils/api";
import { loadBistStocks } from "./store/reducers";
const Tab = createBottomTabNavigator<typeof RootBottomTabParamList>();
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [bistStocksIsReady, setBistStocksIsReady] = useState(false);
  const { headerColor, tabBackgroundColor, tabBarActiveTintColor, tabBarInactiveTintColor } = COLOR;
  const { headerTitleAlign } = BOTTOM_TAB;

  useEffect(() => {
    const prepareBistStocks = async () => {
      const bistStocks = await getBistStocks();
      store?.dispatch(loadBistStocks(bistStocks));
      setBistStocksIsReady(true);
    };
    prepareBistStocks();
  });

  const onLayoutRootView = useCallback(async () => {
    if (bistStocksIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [bistStocksIsReady]);

  if (!bistStocksIsReady) {
    return null;
  }

  return (
    <HeaderSafeContainer onLayout={onLayoutRootView}>
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
