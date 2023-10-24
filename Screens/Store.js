import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Divider } from "react-native-paper";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GestureHandlerRootView,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  useFavouriteFromLocalStorage,
  // useFavouriteStore,
  useStore,
} from "../hooks/AllHooks";
import { InsideStore_and_favouriteStore } from "../components/insideStore/InsideStore_and_favouriteStore";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
// import { FavoriteStoreContext } from "../App";
export let refetchStoreData;
const Store = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const { data, isLoading, error, setRefetchStore } = useStore();
  //I forgot how does work it
  // const { favouriteData, error: ferror, setRefetch } = useContext(FavoriteStoreContext)
  refetchStoreData = setRefetchStore;
  const { favourites: favouriteData, setRefetch } =
    useFavouriteFromLocalStorage("stores");

  useEffect(() => {
    setTimeout(() => {
      setRefetchStore((prev) => prev + 1);
    }, 500);
  }, [data]);

  // refreshing controller
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefetchStore((prev) => prev + 1);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  // handle Heart And Props Data

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <GestureHandlerRootView>
        <View style={styles.headingCon}>
          <View style={styles.headingAndArrow}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ opacity: 0.8 }}
            >
              <Svg
                width="30"
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <G clip-path="url(#clip0_106_1830)">
                  <Path
                    d="M12.5 5L7.5 10L12.5 15"
                    stroke="black"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_106_1830">
                    <Rect width="20" height="20" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </TouchableOpacity>
            <Text style={styles.heading}>Offer Stores</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={styles.search}
          >
            <View style={{ opacity: 0.5 }}>
              <Svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <G clip-path="url(#clip0_106_1688)">
                  <Path
                    d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z"
                    stroke="black"
                    stroke-opacity="0.5"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M17.5 17.5L12.5 12.5"
                    stroke="black"
                    stroke-opacity="0.5"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_106_1688">
                    <Rect width="20" height="20" fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            </View>
          </TouchableOpacity>
        </View>
        <Divider style={{ width: "90%", alignSelf: "center" }} />

        {/* this is Top Stores  section*/}
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ flex: 1, paddingBottom: 100 }}>
            <View style={styles.topStoreCon}>
              <Text style={styles.topStoreHeading}>Top Used Stores</Text>
              {isLoading ? (
                <View
                  style={{
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <ActivityIndicator color={"#797979"} size={"small"} />
                </View>
              ) : data.length === 0 ? (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 70,
                  }}
                >
                  <Text style={{ color: "#ff0000" }}>empty data</Text>
                </View>
              ) : (
                <View>
                  <FlatList
                    data={data}
                    horizontal
                    style={{ paddingHorizontal: 10 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                          width: 80,
                          alignItems: "center",
                          paddingTop: 15,
                          marginRight: 10,
                        }}
                        onPress={() =>
                          navigation.navigate("ViewStore", { ...item })
                        }
                      >
                        <View
                          style={styles.topUsedItem}
                          keyExtractor={(item) => item.id}
                        >
                          <Image
                            style={styles.TSimg}
                            resizeMode="contain"
                            source={{ uri: item?.photoURL }}
                          />
                        </View>
                        <Text style={styles.TStext}>
                          {item?.storeName?.slice(0, 9)}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
            </View>
            {/* this is all store section */}
            <View style={[styles.allStoreMainCon]}>
              <Text style={styles.allStoreText}>All Stores</Text>
              <View style={styles.storeCartContainer}>
                {isLoading ? (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 90,
                      width: "100%",
                    }}
                  >
                    <ActivityIndicator size={"small"} />
                  </View>
                ) : data.length === 0 ? (
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      height: 200,
                      width: "100%",
                    }}
                  >
                    <Text style={{ color: "#ff0000" }}>empty data</Text>
                  </View>
                ) : (
                  data?.map((item) => {
                    // render if the store in favourite
                    if (
                      favouriteData?.find((storeId) => storeId === item._id)
                    ) {
                      return (
                        <InsideStore_and_favouriteStore
                          key={item?._id}
                          item={item}
                          isFavourite={true}
                          setRefetch={setRefetch}
                        />
                      );
                    } else {
                      return (
                        <InsideStore_and_favouriteStore
                          key={item?._id}
                          item={item}
                          setRefetch={setRefetch}
                        />
                      );
                    }
                  })
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default Store;

const styles = StyleSheet.create({
  headingCon: {
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingAndArrow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
  },
  heading: {
    marginLeft: 22,
    fontSize: 18,
    fontWeight: "700",
  },
  search: {
    height: 40,
    width: 40,
    borderColor: "#e6e6e6",
    borderWidth: 2,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  topStoreCon: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  topStoreHeading: {
    fontSize: 16,
    color: "#000",
    opacity: 0.5,
    marginLeft: 20,
    marginBottom: 10,
  },

  topUsedItem: {
    width: 70,
    height: 70,
    borderRadius: 40,
    shadowColor: "rgba(0,0,0,0.3)",
    elevation: 20,
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 15,
  },
  TSimg: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    alignSelf: "center",
  },
  TStext: {
    fontSize: 12,
    color: "#000",
    opacity: 0.5,
    textAlign: "center",
  },
  allStoreMainCon: {
    paddingVertical: 20,
    // backgroundColor: "#fff",
  },
  allStoreText: {
    fontSize: 16,
    opacity: 0.5,
    marginBottom: 5,
    marginLeft: 20,
  },
  storeCartContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // gap: 15,
    // backgroundColor: "green",
    paddingTop: 10,
    // padding: 10,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    rowGap: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  flatList: {
    height: 50,
    backgroundColor: "red",
  },
});
