/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigation/Navigator";
import { createContext, useEffect } from "react";
import { useFavouriteStore, useUserInfo } from "./hooks/AllHooks";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Platform, StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";

export const UserContext = createContext();
export const FavoriteStoreContext = createContext();
export default function App() {
  const { userInfo, setRefetch } = useUserInfo();
  const { favouriteData, error, setRefetch: refetch } = useFavouriteStore();

  // useEffect(() => {
  //   if (Platform.OS === "android") SplashScreen.hide();
  // }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <FavoriteStoreContext.Provider
          value={{ favouriteData, error, setRefetch: refetch }}
        >
          <UserContext.Provider value={{ userInfo, setRefetch }}>
            <Navigator />
            <StatusBar
              animated={true}
              backgroundColor="#000"
              barStyle="light-content"
            />
          </UserContext.Provider>
        </FavoriteStoreContext.Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
