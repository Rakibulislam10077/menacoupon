/* eslint-disable react/react-in-jsx-scope */
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigation/Navigator";
import { createContext } from "react";
import { useFavouriteStore, useUserInfo } from "./hooks/AllHooks";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const UserContext = createContext();
export const FavoriteStoreContext = createContext();
export default function App() {
  const { userInfo, setRefetch } = useUserInfo();
  const { favouriteData, error, setRefetch: refetch } = useFavouriteStore();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <FavoriteStoreContext.Provider
          value={{ favouriteData, error, setRefetch: refetch }}
        >
          <UserContext.Provider value={{ userInfo, setRefetch }}>
            <Navigator />
          </UserContext.Provider>
        </FavoriteStoreContext.Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
