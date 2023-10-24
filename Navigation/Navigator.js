import React, { useEffect, useState } from "react";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Svg, G, Path, Rect, ClipPath, Defs } from "react-native-svg";
import Home from "../Screens/Home";
import Coupon from "../Screens/Coupon";
import Favorite from "../components/Favourite/Favorite";
// import Account from "../Screens/Account";
import Search from "../components/search/Search";
import TopStore from "../components/topStore/TopStore";
import ViewStore from "../components/viewStore/ViewStore";
import Store from "../Screens/Store";
import Notifications from "../components/notification/Notifications";
import Profile from "../components/profile/Profile";
import MyProfile from "../components/myProfile/MyProfile";
import Onboard from "../Screens/Onboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ChooseCountry from "../Screens/ChooseCountry";
import HomeCouponItem from "../components/homeBestCouponItem/HomeCouponItem";
// import { UserContext } from "../App";
// import BottomSheet from "../components/shared/BottomSheet";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// import { useNavigation } from "@react-navigation/native";
import { useContact } from "../hooks/AllHooks";
import { Alert } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Account from "../Screens/Account";
import TermsAndCondition from "../components/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import { getItem } from "../Utils/asyncStorage";
import ChooseAgainCountry from "../components/chooseAgainCountry/ChooseAgainCountry";
// import { getSelectedCountry } from "../Utils/getSelectedCountry";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const { number } = useContact();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            shadowColor: "#000",
            elevation: 15,
            borderTopColor: "#fff",
          },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {focused ? (
                    <Svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <G id="Frame">
                        <Path
                          id="Vector"
                          d="M10.0584 3.20009C10.1756 3.08305 10.3344 3.01731 10.5001 3.01731C10.6657 3.01731 10.8245 3.08305 10.9417 3.20009L18.1834 10.4418C18.2406 10.5032 18.3096 10.5524 18.3863 10.5866C18.463 10.6207 18.5457 10.6391 18.6296 10.6406C18.7136 10.6421 18.7969 10.6266 18.8747 10.5952C18.9526 10.5638 19.0233 10.517 19.0826 10.4576C19.1419 10.3983 19.1887 10.3276 19.2202 10.2498C19.2516 10.1719 19.267 10.0886 19.2656 10.0047C19.2641 9.92074 19.2457 9.83798 19.2116 9.76131C19.1774 9.68465 19.1281 9.61565 19.0667 9.55843L11.8259 2.31676C11.6518 2.14265 11.4451 2.00454 11.2176 1.91031C10.9901 1.81608 10.7463 1.76758 10.5001 1.76758C10.2538 1.76758 10.01 1.81608 9.78253 1.91031C9.55504 2.00454 9.34835 2.14265 9.17424 2.31676L1.93257 9.55843C1.81877 9.67636 1.75585 9.83426 1.75735 9.99814C1.75885 10.162 1.82466 10.3187 1.94059 10.4346C2.05653 10.5504 2.21332 10.616 2.37719 10.6174C2.54106 10.6187 2.69891 10.5557 2.81673 10.4418L10.0584 3.20009Z"
                          fill="#283D27"
                        />
                        <Path
                          id="Vector_2"
                          d="M10.5 4.52657L17.2992 11.3257C17.3242 11.3507 17.3492 11.3741 17.375 11.3974V16.5624C17.375 17.4249 16.675 18.1249 15.8125 18.1249H13C12.8342 18.1249 12.6753 18.0591 12.5581 17.9418C12.4408 17.8246 12.375 17.6657 12.375 17.4999V13.7499C12.375 13.5841 12.3092 13.4252 12.1919 13.308C12.0747 13.1908 11.9158 13.1249 11.75 13.1249H9.25C9.08424 13.1249 8.92527 13.1908 8.80806 13.308C8.69085 13.4252 8.625 13.5841 8.625 13.7499V17.4999C8.625 17.6657 8.55915 17.8246 8.44194 17.9418C8.32473 18.0591 8.16576 18.1249 8 18.1249H5.1875C4.7731 18.1249 4.37567 17.9603 4.08265 17.6673C3.78962 17.3742 3.625 16.9768 3.625 16.5624V11.3974C3.65093 11.3742 3.67621 11.3503 3.70083 11.3257L10.5 4.5249V4.52657Z"
                          fill="#283D27"
                        />
                      </G>
                    </Svg>
                  ) : (
                    <Svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <G id="Frame">
                        <Path
                          id="Vector"
                          d="M2.375 10.0001L9.83667 2.53756C10.2033 2.17173 10.7967 2.17173 11.1625 2.53756L18.625 10.0001M4.25 8.12506V16.5626C4.25 17.0801 4.67 17.5001 5.1875 17.5001H8.625V13.4376C8.625 12.9201 9.045 12.5001 9.5625 12.5001H11.4375C11.955 12.5001 12.375 12.9201 12.375 13.4376V17.5001H15.8125C16.33 17.5001 16.75 17.0801 16.75 16.5626V8.12506M7.375 17.5001H14.25"
                          stroke="#7F7F7F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </G>
                    </Svg>
                  )}
                  <Text
                    style={{
                      color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                      fontWeight: focused ? "600" : "400",
                      fontSize: 12,
                    }}
                  >
                    Home
                  </Text>
                </View>
              );
            },
            headerShown: false,
            headerStyle: { height: 100 },
            headerTitleStyle: { marginTop: 30 },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {focused ? (
                    <Svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <G id="Frame">
                        <Path
                          id="Vector"
                          d="M4.60241 1.875C4.18824 1.875 3.79074 2.04 3.49824 2.33333L2.41491 3.415C1.85509 3.97377 1.528 4.72404 1.49958 5.51448C1.47116 6.30493 1.74354 7.07675 2.26178 7.67428C2.78002 8.27181 3.50556 8.65059 4.29208 8.73424C5.0786 8.81788 5.86759 8.60017 6.49991 8.125C7.02241 8.51667 7.67157 8.75 8.37491 8.75C9.07824 8.75 9.72824 8.51667 10.2499 8.125C10.7716 8.51667 11.4216 8.75 12.1249 8.75C12.8282 8.75 13.4774 8.51667 13.9999 8.125C14.6322 8.60017 15.4212 8.81788 16.2077 8.73424C16.9943 8.65059 17.7198 8.27181 18.238 7.67428C18.7563 7.07675 19.0287 6.30493 19.0002 5.51448C18.9718 4.72404 18.6447 3.97377 18.0849 3.415L17.0016 2.3325C16.7087 2.0397 16.3115 1.87514 15.8974 1.875H4.60241Z"
                          fill="#283D27"
                        />
                        <Path
                          id="Vector_2"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.75 16.875V9.5792C3.93333 10.1409 5.31667 10.14 6.5 9.5792C7.08594 9.85713 7.72649 10.0009 8.375 10C9.045 10 9.68167 9.84837 10.25 9.57837C10.8359 9.85658 11.4764 10.0006 12.125 10C12.795 10 13.4308 9.84837 14 9.57837C15.1833 10.14 16.5667 10.1409 17.75 9.5792V16.875H18.375C18.5408 16.875 18.6997 16.9409 18.8169 17.0581C18.9342 17.1753 19 17.3343 19 17.5C19 17.6658 18.9342 17.8248 18.8169 17.942C18.6997 18.0592 18.5408 18.125 18.375 18.125H2.125C1.95924 18.125 1.80027 18.0592 1.68306 17.942C1.56585 17.8248 1.5 17.6658 1.5 17.5C1.5 17.3343 1.56585 17.1753 1.68306 17.0581C1.80027 16.9409 1.95924 16.875 2.125 16.875H2.75ZM5.25 11.875C5.25 11.7093 5.31585 11.5503 5.43306 11.4331C5.55027 11.3159 5.70924 11.25 5.875 11.25H8.375C8.54076 11.25 8.69973 11.3159 8.81694 11.4331C8.93415 11.5503 9 11.7093 9 11.875V14.375C9 14.5408 8.93415 14.6998 8.81694 14.817C8.69973 14.9342 8.54076 15 8.375 15H5.875C5.70924 15 5.55027 14.9342 5.43306 14.817C5.31585 14.6998 5.25 14.5408 5.25 14.375V11.875ZM12.125 11.25C11.9592 11.25 11.8003 11.3159 11.6831 11.4331C11.5658 11.5503 11.5 11.7093 11.5 11.875V16.25C11.5 16.595 11.78 16.875 12.125 16.875H14.625C14.7908 16.875 14.9497 16.8092 15.0669 16.692C15.1842 16.5748 15.25 16.4158 15.25 16.25V11.875C15.25 11.7093 15.1842 11.5503 15.0669 11.4331C14.9497 11.3159 14.7908 11.25 14.625 11.25H12.125Z"
                          fill="#283D27"
                        />
                      </G>
                    </Svg>
                  ) : (
                    <Svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <G id="Frame">
                        <Path
                          id="Vector"
                          d="M12 17.5V11.25C12 11.0842 12.0659 10.9253 12.1831 10.8081C12.3003 10.6908 12.4593 10.625 12.625 10.625H15.125C15.2908 10.625 15.4497 10.6908 15.567 10.8081C15.6842 10.9253 15.75 11.0842 15.75 11.25V17.5M12 17.5H2.71668M12 17.5H15.75M15.75 17.5H18.7833M17.625 17.5V7.79083C17.9572 7.59909 18.2408 7.33349 18.4538 7.01459C18.6669 6.6957 18.8038 6.33205 18.8538 5.95179C18.9038 5.57154 18.8657 5.18487 18.7424 4.82171C18.619 4.45855 18.4138 4.12864 18.1425 3.8575L17.1508 2.86667C16.9167 2.63218 16.5989 2.50029 16.2675 2.5H5.23168C4.90027 2.50029 4.58254 2.63218 4.34835 2.86667L3.35751 3.85667C3.08688 4.12811 2.88219 4.45809 2.75924 4.82114C2.63628 5.1842 2.59834 5.57064 2.64834 5.95068C2.69834 6.33072 2.83495 6.6942 3.04763 7.01309C3.2603 7.33199 3.54337 7.59779 3.87501 7.79M3.87501 17.4992V7.79167C4.37503 8.07999 4.95939 8.18647 5.52897 8.09306C6.09855 7.99965 6.61828 7.71209 7.00001 7.27917C7.23443 7.54537 7.52293 7.75852 7.84626 7.90437C8.16959 8.05023 8.52031 8.12545 8.87501 8.125C9.62168 8.125 10.2917 7.7975 10.75 7.27833C10.9844 7.54469 11.2728 7.75799 11.5962 7.90399C11.9195 8.05 12.2702 8.12534 12.625 8.125C13.3717 8.125 14.0417 7.7975 14.5 7.27833C14.8819 7.71112 15.4016 7.99852 15.9712 8.09178C16.5408 8.18504 17.1251 8.07842 17.625 7.79M6.37501 14.9992H9.50001C9.66577 14.9992 9.82474 14.9333 9.94195 14.8161C10.0592 14.6989 10.125 14.5399 10.125 14.3742V11.25C10.125 11.0842 10.0592 10.9253 9.94195 10.8081C9.82474 10.6908 9.66577 10.625 9.50001 10.625H6.37501C6.20925 10.625 6.05028 10.6908 5.93307 10.8081C5.81586 10.9253 5.75001 11.0842 5.75001 11.25V14.375C5.75001 14.7208 6.03001 14.9992 6.37501 14.9992Z"
                          stroke="#7F7F7F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </G>
                    </Svg>
                  )}
                  <Text
                    style={{
                      color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                      fontWeight: focused ? "600" : "400",
                      fontSize: 12,
                    }}
                  >
                    Store
                  </Text>
                </View>
              );
            },
            headerShown: false,
          }}
          name="Store"
          component={Store}
        />
        <Tab.Screen
          name="whatsapp"
          component={""}
          options={{
            tabBarIcon: () => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => Linking.openURL(`https://wa.me/${number}`)}
                  style={{ marginTop: -40 }}
                >
                  <Svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Rect
                      x="40"
                      y="0.707107"
                      width="55.5685"
                      height="55.5685"
                      rx="19.5"
                      transform="rotate(45 40 0.707107)"
                      fill="#0DC143"
                      stroke="#F9F8F7"
                    />
                    <G clip-path="url(#clip0_827_4268)">
                      <Path
                        d="M28.75 51.2499L30.8125 46.4999C29.2346 44.26 28.5283 41.5212 28.8263 38.7975C29.1243 36.0739 30.406 33.5526 32.4309 31.7068C34.4558 29.861 37.0847 28.8177 39.8242 28.7725C42.5638 28.7274 45.2256 29.6836 47.3102 31.4616C49.3948 33.2397 50.7589 35.7174 51.1465 38.4297C51.534 41.1421 50.9184 43.9027 49.4151 46.1934C47.9119 48.4841 45.6243 50.1474 42.9817 50.8713C40.3392 51.5951 37.5233 51.3298 35.0625 50.1249L28.75 51.2499Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M36.25 37.5C36.25 37.6658 36.3158 37.8247 36.4331 37.9419C36.5503 38.0592 36.7092 38.125 36.875 38.125C37.0408 38.125 37.1997 38.0592 37.3169 37.9419C37.4342 37.8247 37.5 37.6658 37.5 37.5V36.25C37.5 36.0842 37.4342 35.9253 37.3169 35.8081C37.1997 35.6908 37.0408 35.625 36.875 35.625C36.7092 35.625 36.5503 35.6908 36.4331 35.8081C36.3158 35.9253 36.25 36.0842 36.25 36.25V37.5ZM36.25 37.5C36.25 39.1576 36.9085 40.7473 38.0806 41.9194C39.2527 43.0915 40.8424 43.75 42.5 43.75M42.5 43.75H43.75C43.9158 43.75 44.0747 43.6842 44.1919 43.5669C44.3092 43.4497 44.375 43.2908 44.375 43.125C44.375 42.9592 44.3092 42.8003 44.1919 42.6831C44.0747 42.5658 43.9158 42.5 43.75 42.5H42.5C42.3342 42.5 42.1753 42.5658 42.0581 42.6831C41.9408 42.8003 41.875 42.9592 41.875 43.125C41.875 43.2908 41.9408 43.4497 42.0581 43.5669C42.1753 43.6842 42.3342 43.75 42.5 43.75Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_827_4268">
                        <Rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(25 25)"
                        />
                      </ClipPath>
                    </Defs>
                  </Svg>
                </TouchableOpacity>
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {focused ? (
                    <Svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <G id="Frame">
                        <Path
                          id="Vector"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.75 5.3125C1.75 4.44917 2.45 3.75 3.3125 3.75H17.6875C18.55 3.75 19.25 4.45 19.25 5.3125V7.83417C19.2501 7.94394 19.2212 8.05181 19.1664 8.14689C19.1115 8.24198 19.0326 8.32094 18.9375 8.37583C18.6521 8.54018 18.415 8.77684 18.2502 9.06197C18.0853 9.34711 17.9985 9.67064 17.9985 10C17.9985 10.3294 18.0853 10.6529 18.2502 10.938C18.415 11.2232 18.6521 11.4598 18.9375 11.6242C19.0326 11.6791 19.1115 11.758 19.1664 11.8531C19.2212 11.9482 19.2501 12.0561 19.25 12.1658V14.6875C19.25 15.55 18.55 16.25 17.6875 16.25H3.3125C2.8981 16.25 2.50067 16.0854 2.20765 15.7924C1.91462 15.4993 1.75 15.1019 1.75 14.6875V12.1658C1.74985 12.0561 1.77857 11.9483 1.83327 11.8532C1.88798 11.7582 1.96675 11.6792 2.06167 11.6242C2.34709 11.4598 2.58416 11.2232 2.74901 10.938C2.91385 10.6529 3.00064 10.3294 3.00064 10C3.00064 9.67064 2.91385 9.34711 2.74901 9.06197C2.58416 8.77684 2.34709 8.54018 2.06167 8.37583C1.96675 8.32084 1.88798 8.24183 1.83327 8.14675C1.77857 8.05167 1.74985 7.94386 1.75 7.83417V5.3125ZM14.25 4.375C14.4158 4.375 14.5747 4.44085 14.6919 4.55806C14.8092 4.67527 14.875 4.83424 14.875 5V5.625C14.875 5.79076 14.8092 5.94973 14.6919 6.06694C14.5747 6.18415 14.4158 6.25 14.25 6.25C14.0842 6.25 13.9253 6.18415 13.8081 6.06694C13.6908 5.94973 13.625 5.79076 13.625 5.625V5C13.625 4.83424 13.6908 4.67527 13.8081 4.55806C13.9253 4.44085 14.0842 4.375 14.25 4.375ZM14.875 8.125C14.875 7.95924 14.8092 7.80027 14.6919 7.68306C14.5747 7.56585 14.4158 7.5 14.25 7.5C14.0842 7.5 13.9253 7.56585 13.8081 7.68306C13.6908 7.80027 13.625 7.95924 13.625 8.125V8.75C13.625 8.91576 13.6908 9.07473 13.8081 9.19194C13.9253 9.30915 14.0842 9.375 14.25 9.375C14.4158 9.375 14.5747 9.30915 14.6919 9.19194C14.8092 9.07473 14.875 8.91576 14.875 8.75V8.125ZM14.25 10.625C14.4158 10.625 14.5747 10.6908 14.6919 10.8081C14.8092 10.9253 14.875 11.0842 14.875 11.25V11.875C14.875 12.0408 14.8092 12.1997 14.6919 12.3169C14.5747 12.4342 14.4158 12.5 14.25 12.5C14.0842 12.5 13.9253 12.4342 13.8081 12.3169C13.6908 12.1997 13.625 12.0408 13.625 11.875V11.25C13.625 11.0842 13.6908 10.9253 13.8081 10.8081C13.9253 10.6908 14.0842 10.625 14.25 10.625ZM14.875 14.375C14.875 14.2092 14.8092 14.0503 14.6919 13.9331C14.5747 13.8158 14.4158 13.75 14.25 13.75C14.0842 13.75 13.9253 13.8158 13.8081 13.9331C13.6908 14.0503 13.625 14.2092 13.625 14.375V15C13.625 15.1658 13.6908 15.3247 13.8081 15.4419C13.9253 15.5592 14.0842 15.625 14.25 15.625C14.4158 15.625 14.5747 15.5592 14.6919 15.4419C14.8092 15.3247 14.875 15.1658 14.875 15V14.375ZM5.5 10C5.5 9.83424 5.56585 9.67527 5.68306 9.55806C5.80027 9.44085 5.95924 9.375 6.125 9.375H10.5C10.6658 9.375 10.8247 9.44085 10.9419 9.55806C11.0592 9.67527 11.125 9.83424 11.125 10C11.125 10.1658 11.0592 10.3247 10.9419 10.4419C10.8247 10.5592 10.6658 10.625 10.5 10.625H6.125C5.95924 10.625 5.80027 10.5592 5.68306 10.4419C5.56585 10.3247 5.5 10.1658 5.5 10ZM6.125 11.875C5.95924 11.875 5.80027 11.9408 5.68306 12.0581C5.56585 12.1753 5.5 12.3342 5.5 12.5C5.5 12.6658 5.56585 12.8247 5.68306 12.9419C5.80027 13.0592 5.95924 13.125 6.125 13.125H8.625C8.79076 13.125 8.94973 13.0592 9.06694 12.9419C9.18415 12.8247 9.25 12.6658 9.25 12.5C9.25 12.3342 9.18415 12.1753 9.06694 12.0581C8.94973 11.9408 8.79076 11.875 8.625 11.875H6.125Z"
                          fill="#283D27"
                        />
                      </G>
                    </Svg>
                  ) : (
                    <Svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <G id="Frame">
                        <Path
                          id="Vector"
                          d="M14.25 5V5.625M14.25 8.125V8.75M14.25 11.25V11.875M14.25 14.375V15M6.75 10.625H11.125M6.75 12.5H9.25M3.3125 4.375C2.795 4.375 2.375 4.795 2.375 5.3125V7.83417C2.75562 8.05331 3.07177 8.3689 3.2916 8.74912C3.51143 9.12935 3.62717 9.5608 3.62717 10C3.62717 10.4392 3.51143 10.8706 3.2916 11.2509C3.07177 11.6311 2.75562 11.9467 2.375 12.1658V14.6875C2.375 15.205 2.795 15.625 3.3125 15.625H17.6875C18.205 15.625 18.625 15.205 18.625 14.6875V12.1658C18.2444 11.9467 17.9282 11.6311 17.7084 11.2509C17.4886 10.8706 17.3728 10.4392 17.3728 10C17.3728 9.5608 17.4886 9.12935 17.7084 8.74912C17.9282 8.3689 18.2444 8.05331 18.625 7.83417V5.3125C18.625 4.795 18.205 4.375 17.6875 4.375H3.3125Z"
                          stroke="#7F7F7F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </G>
                    </Svg>
                  )}
                  <Text
                    style={{
                      color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                      fontWeight: focused ? "600" : "400",
                      fontSize: 12,
                    }}
                  >
                    Offers
                  </Text>
                </View>
              );
            },
            headerShown: false,
          }}
          name="Coupon"
          component={Coupon}
        />
        {
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {focused ? (
                      <Svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.25 5C6.25 4.00544 6.64509 3.05161 7.34835 2.34835C8.05161 1.64509 9.00544 1.25 10 1.25C10.9946 1.25 11.9484 1.64509 12.6516 2.34835C13.3549 3.05161 13.75 4.00544 13.75 5C13.75 5.99456 13.3549 6.94839 12.6516 7.65165C11.9484 8.35491 10.9946 8.75 10 8.75C9.00544 8.75 8.05161 8.35491 7.34835 7.65165C6.64509 6.94839 6.25 5.99456 6.25 5ZM3.12583 16.7542C3.15393 14.9496 3.89053 13.2284 5.17663 11.9622C6.46273 10.6959 8.19518 9.98621 10 9.98621C11.8048 9.98621 13.5373 10.6959 14.8234 11.9622C16.1095 13.2284 16.8461 14.9496 16.8742 16.7542C16.8763 16.8757 16.843 16.9951 16.7784 17.098C16.7137 17.2009 16.6204 17.2826 16.51 17.3333C14.4676 18.2698 12.2468 18.753 10 18.75C7.67833 18.75 5.4725 18.2433 3.49 17.3333C3.37957 17.2826 3.28631 17.2009 3.22163 17.098C3.15696 16.9951 3.12366 16.8757 3.12583 16.7542Z"
                          fill="#283D27"
                        />
                      </Svg>
                    ) : (
                      <Svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Path
                          d="M13.125 5C13.125 5.8288 12.7958 6.62366 12.2097 7.20971C11.6237 7.79576 10.8288 8.125 10 8.125C9.17122 8.125 8.37636 7.79576 7.79031 7.20971C7.20426 6.62366 6.87502 5.8288 6.87502 5C6.87502 4.1712 7.20426 3.37634 7.79031 2.79029C8.37636 2.20424 9.17122 1.875 10 1.875C10.8288 1.875 11.6237 2.20424 12.2097 2.79029C12.7958 3.37634 13.125 4.1712 13.125 5ZM3.75085 16.765C3.77763 15.1253 4.4478 13.5618 5.61684 12.4117C6.78587 11.2616 8.36009 10.6171 10 10.6171C11.6399 10.6171 13.2142 11.2616 14.3832 12.4117C15.5522 13.5618 16.2224 15.1253 16.2492 16.765C14.2887 17.664 12.1568 18.1279 10 18.125C7.77002 18.125 5.65335 17.6383 3.75085 16.765Z"
                          stroke="#7F7F7F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>
                    )}
                    <Text
                      style={{
                        color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                        fontWeight: focused ? "600" : "400",
                        fontSize: 12,
                      }}
                    >
                      Account
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
            name="Account"
            component={Account}
          />
        }
        {/* {userInfo ? (
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {focused ? (
                      <Svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <G id="Frame">
                          <Path
                            id="Vector"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.25 5C6.25 4.00544 6.64509 3.05161 7.34835 2.34835C8.05161 1.64509 9.00544 1.25 10 1.25C10.9946 1.25 11.9484 1.64509 12.6516 2.34835C13.3549 3.05161 13.75 4.00544 13.75 5C13.75 5.99456 13.3549 6.94839 12.6516 7.65165C11.9484 8.35491 10.9946 8.75 10 8.75C9.00544 8.75 8.05161 8.35491 7.34835 7.65165C6.64509 6.94839 6.25 5.99456 6.25 5ZM3.12583 16.7542C3.15393 14.9496 3.89053 13.2284 5.17663 11.9622C6.46273 10.6959 8.19518 9.98621 10 9.98621C11.8048 9.98621 13.5373 10.6959 14.8234 11.9622C16.1095 13.2284 16.8461 14.9496 16.8742 16.7542C16.8763 16.8757 16.843 16.9951 16.7784 17.098C16.7137 17.2009 16.6204 17.2826 16.51 17.3333C14.4676 18.2698 12.2468 18.753 10 18.75C7.67833 18.75 5.4725 18.2433 3.49 17.3333C3.37957 17.2826 3.28631 17.2009 3.22163 17.098C3.15696 16.9951 3.12366 16.8757 3.12583 16.7542Z"
                            fill="#283D27"
                          />
                        </G>
                      </Svg>
                    ) : (
                      <Svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <G id="Frame">
                          <Path
                            id="Vector"
                            d="M13.125 5C13.125 5.8288 12.7958 6.62366 12.2097 7.20971C11.6237 7.79576 10.8288 8.125 10 8.125C9.17122 8.125 8.37636 7.79576 7.79031 7.20971C7.20426 6.62366 6.87502 5.8288 6.87502 5C6.87502 4.1712 7.20426 3.37634 7.79031 2.79029C8.37636 2.20424 9.17122 1.875 10 1.875C10.8288 1.875 11.6237 2.20424 12.2097 2.79029C12.7958 3.37634 13.125 4.1712 13.125 5ZM3.75085 16.765C3.77763 15.1253 4.4478 13.5618 5.61684 12.4117C6.78587 11.2616 8.36009 10.6171 10 10.6171C11.6399 10.6171 13.2142 11.2616 14.3832 12.4117C15.5522 13.5618 16.2224 15.1253 16.2492 16.765C14.2887 17.664 12.1568 18.1279 10 18.125C7.77002 18.125 5.65335 17.6383 3.75085 16.765Z"
                            stroke="#7F7F7F"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </G>
                      </Svg>
                    )}
                    <Text
                      style={{
                        color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                        fontWeight: focused ? 600 : 400,
                        fontSize: 12,
                      }}
                    >
                      Account
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
            name="Account"
            component={Account}
          />
        ) : (
          <Tab.Screen
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    {focused ? (
                      <Svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <G id="Frame">
                          <Path
                            id="Vector"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.25 5C6.25 4.00544 6.64509 3.05161 7.34835 2.34835C8.05161 1.64509 9.00544 1.25 10 1.25C10.9946 1.25 11.9484 1.64509 12.6516 2.34835C13.3549 3.05161 13.75 4.00544 13.75 5C13.75 5.99456 13.3549 6.94839 12.6516 7.65165C11.9484 8.35491 10.9946 8.75 10 8.75C9.00544 8.75 8.05161 8.35491 7.34835 7.65165C6.64509 6.94839 6.25 5.99456 6.25 5ZM3.12583 16.7542C3.15393 14.9496 3.89053 13.2284 5.17663 11.9622C6.46273 10.6959 8.19518 9.98621 10 9.98621C11.8048 9.98621 13.5373 10.6959 14.8234 11.9622C16.1095 13.2284 16.8461 14.9496 16.8742 16.7542C16.8763 16.8757 16.843 16.9951 16.7784 17.098C16.7137 17.2009 16.6204 17.2826 16.51 17.3333C14.4676 18.2698 12.2468 18.753 10 18.75C7.67833 18.75 5.4725 18.2433 3.49 17.3333C3.37957 17.2826 3.28631 17.2009 3.22163 17.098C3.15696 16.9951 3.12366 16.8757 3.12583 16.7542Z"
                            fill="#283D27"
                          />
                        </G>
                      </Svg>
                    ) : (
                      <Svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <G id="Frame">
                          <Path
                            id="Vector"
                            d="M13.125 5C13.125 5.8288 12.7958 6.62366 12.2097 7.20971C11.6237 7.79576 10.8288 8.125 10 8.125C9.17122 8.125 8.37636 7.79576 7.79031 7.20971C7.20426 6.62366 6.87502 5.8288 6.87502 5C6.87502 4.1712 7.20426 3.37634 7.79031 2.79029C8.37636 2.20424 9.17122 1.875 10 1.875C10.8288 1.875 11.6237 2.20424 12.2097 2.79029C12.7958 3.37634 13.125 4.1712 13.125 5ZM3.75085 16.765C3.77763 15.1253 4.4478 13.5618 5.61684 12.4117C6.78587 11.2616 8.36009 10.6171 10 10.6171C11.6399 10.6171 13.2142 11.2616 14.3832 12.4117C15.5522 13.5618 16.2224 15.1253 16.2492 16.765C14.2887 17.664 12.1568 18.1279 10 18.125C7.77002 18.125 5.65335 17.6383 3.75085 16.765Z"
                            stroke="#7F7F7F"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </G>
                      </Svg>
                    )}
                    <Text
                      style={{
                        color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                        fontWeight: focused ? 600 : 400,
                        fontSize: 12,
                      }}
                    >
                      Login
                    </Text>
                  </View>
                );
              },
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
        )} */}
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
};

const Navigator = () => {
  const [showOnboarding, setShowOnboarding] = useState(null);
  const [showCountry, setShowCountry] = useState(null);

  useEffect(() => {
    const checkIfAlreadySelectCountry = async () => {
      let country = await AsyncStorage.getItem("selectedCountry");
      if (country == 1) {
        setShowCountry(false);
      } else {
        setShowCountry(true);
      }
    };
    checkIfAlreadySelectCountry();
  }, []);

  // =============== the section for onboarding=====================
  useEffect(() => {
    const checkIfAlreadyOnborded = async () => {
      let onboarded = await AsyncStorage.getItem("onboarded");
      if (onboarded == 1) {
        setShowOnboarding(false);
      } else {
        setShowOnboarding(true);
      }
    };
    checkIfAlreadyOnborded();
  }, []);

  if (showOnboarding == null) {
    return null;
  }
  if (!showOnboarding) {
    return (
      <Stack.Navigator initialRouteName="ChooseCountry">
        {showCountry && (
          <Stack.Screen
            options={{ headerShown: false }}
            name="ChooseCountry"
            component={ChooseCountry}
          />
        )}
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChooseAgainCountry"
          component={ChooseAgainCountry}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TopStore"
          component={TopStore}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ViewStore"
          component={ViewStore}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notifications"
          component={Notifications}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyProfile"
          component={MyProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Favourite"
          component={Favorite}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeCouponItem"
          component={HomeCouponItem}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TermsAndCondition"
          component={TermsAndCondition}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Onboard">
        {
          <Stack.Screen
            options={{ headerShown: false }}
            name="Onboard"
            component={Onboard}
          />
        }
        {
          <Stack.Screen
            options={{ headerShown: false }}
            name="ChooseCountry"
            component={ChooseCountry}
          />
        }
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ChooseAgainCountry"
          component={ChooseAgainCountry}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TopStore"
          component={TopStore}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ViewStore"
          component={ViewStore}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notifications"
          component={Notifications}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MyProfile"
          component={MyProfile}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Favourite"
          component={Favorite}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeCouponItem"
          component={HomeCouponItem}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TermsAndCondition"
          component={TermsAndCondition}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        {/* <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      /> */}
        {/* <Stack.Screen
        promptAsync={promptAsync}
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      /> */}
      </Stack.Navigator>
    );
  }
};

export default Navigator;
