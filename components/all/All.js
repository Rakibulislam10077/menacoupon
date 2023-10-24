import { ActivityIndicator, Text, View } from "react-native";
import React from "react";
import StoreDetails from "../storeDetails/StoreDetails";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { useQueryCoupon } from "../../hooks/AllHooks";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { width } from "../../Utils/CustomWidthAndHeight";

const All = ({
  storeName,
  handlePresentModalPress,
  setIsBottomSheetOpen,
  item,
}) => {
  const { couponData, isLoading } = useQueryCoupon(storeName, "");
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{ backgroundColor: "#fff", flex: 1 }}
    >
      <View style={{ flex: 1, paddingBottom: 100, paddingHorizontal: 20 }}>
        {isLoading ? (
          <ActivityIndicator style={{ marginTop: 50 }} />
        ) : couponData.length === 0 ? (
          <View
            style={{
              height: 320,
              width: "90%",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg
              width="80"
              height="80"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <G clip-path="url(#clip0_106_2784)">
                <Path
                  d="M17.5 58.3333V52.5C17.5 47.8587 19.3437 43.4075 22.6256 40.1256C25.9075 36.8437 30.3587 35 35 35C39.6413 35 44.0925 36.8437 47.3744 40.1256C50.6563 43.4075 52.5 47.8587 52.5 52.5V58.3333C52.5 59.1069 52.1927 59.8487 51.6457 60.3957C51.0988 60.9427 50.3569 61.25 49.5833 61.25H20.4167C19.6431 61.25 18.9013 60.9427 18.3543 60.3957C17.8073 59.8487 17.5 59.1069 17.5 58.3333Z"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M17.5 11.6667V17.5C17.5 22.1413 19.3437 26.5925 22.6256 29.8744C25.9075 33.1563 30.3587 35 35 35C39.6413 35 44.0925 33.1563 47.3744 29.8744C50.6563 26.5925 52.5 22.1413 52.5 17.5V11.6667C52.5 10.8931 52.1927 10.1513 51.6457 9.60427C51.0988 9.05729 50.3569 8.75 49.5833 8.75H20.4167C19.6431 8.75 18.9013 9.05729 18.3543 9.60427C17.8073 10.1513 17.5 10.8931 17.5 11.6667Z"
                  stroke="black"
                  stroke-opacity="0.5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_106_2784">
                  <Rect width="70" height="70" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <Text style={{ color: "grey", fontSize: 16, marginTop: 20 }}>
              There are currently no offer available
            </Text>
          </View>
        ) : (
          couponData.map((item) => (
            <StoreDetails
              handlePresentModalPress={handlePresentModalPress}
              setIsBottomSheetOpen={setIsBottomSheetOpen}
              key={item._id}
              item={item}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default All;
