import {
  Button,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Divider } from "react-native-paper";
import StoreDetails from "../components/storeDetails/StoreDetails";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useAllcoupon } from "../hooks/AllHooks";
import BottomSheet from "../components/shared/BottomSheet";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const Coupon = ({ navigation }) => {
  const { allData, loadData, error } = useAllcoupon();
  const [backDrop, setBackDrop] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState({});

  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "80%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setBackDrop(true);
  }, []);

  // callbacks
  const handleDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <BottomSheetModalProvider>
        <View
          style={{
            backgroundColor: "#fff",
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                marginLeft: 22,
              }}
            >
              Coupon codes
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Search")}
            style={{
              height: 40,
              width: 40,
              borderColor: "#e6e6e6",
              borderWidth: 2,
              borderRadius: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
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
        <ScrollView>
          <Text
            style={{
              fontSize: 16,
              opacity: 0.5,
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            All Coupon code
          </Text>
          <View
            style={{
              backgroundColor: "#fff",
              paddingBottom: 20,
            }}
          >
            {loadData ? (
              <ActivityIndicator size={"small"} color={"#283d27"} />
            ) : allData.length === 0 ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 400,
                }}
              >
                <Text>Empty data</Text>
              </View>
            ) : (
              allData.map((POitem, index) => (
                <StoreDetails
                  setIsBottomSheetOpen={setIsBottomSheetOpen}
                  handlePresentModalPress={handlePresentModalPress}
                  key={index}
                  POitem={POitem}
                />
              ))
            )}
          </View>
        </ScrollView>

        {isBottomSheetOpen && (
          <BottomSheet
            data={isBottomSheetOpen}
            handleDismissModal={handleDismissModal}
            bottomSheetModalRef={bottomSheetModalRef}
            backDrop={backDrop}
            snapPoints={snapPoints}
          />
        )}
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default Coupon;
