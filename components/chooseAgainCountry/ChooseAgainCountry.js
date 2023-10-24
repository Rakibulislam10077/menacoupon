/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { customeStyle } from "../chooseCountry/style";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { useAllcoupon, useStore } from "../../hooks/AllHooks";
import { refetchHomePost, refetchHomeStore } from "../../Screens/Home";
import { refetchCouponPost } from "../../Screens/Coupon";
import { refetchStoreData } from "../../Screens/Store";

const ChooseAgainCountry = (props) => {
  const refetchHomeStoreData = refetchHomeStore;
  const refetchHomePosteData = refetchHomePost;
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { setRefetchStore } = useStore();
  const { setRefetchPost } = useAllcoupon();
  const countrys = [
    {
      id: 1,
      name: "Qatar",
      shortForm: "Qatar",
      image: require("../../assets/images/qatar.png"),
    },
    {
      id: 2,
      name: "Oman",
      shortForm: "Oman",
      image: require("../../assets/images/oman.png"),
    },
    {
      id: 3,
      name: "Saudi Arabia",
      shortForm: "KSA",
      image: require("../../assets/images/arabia.png"),
    },
    {
      id: 4,
      name: "Egypt",
      shortForm: "Egypt",
      image: require("../../assets/images/egypt.png"),
    },
    {
      id: 5,
      name: "United Arab Emirates",
      shortForm: "UAE",
      image: require("../../assets/images/emirates.png"),
    },
    {
      id: 6,
      name: "Kuwait",
      shortForm: "Kuwait",
      image: require("../../assets/images/kuwait.png"),
    },
    {
      id: 7,
      name: "Bahrain",
      shortForm: "Bahrain",
      image: require("../../assets/images/bahrain.png"),
    },
  ];

  const selected_item_style_and_async_storage = async (country) => {
    setSelectedCountry(country);
    await AsyncStorage.setItem("couponCountry", country.name);
  };

  const handleUseTheAppButton = async () => {
    // country flag refresh
    await props.route.params.setRefetch((prev) => prev + 1);
    await refetchHomeStoreData((prev) => prev + 1);
    await refetchHomePosteData((prev) => prev + 1);
    navigation.navigate("HomeScreen");
    await AsyncStorage.setItem("selectedCountry", "1");
  };

  return (
    <SafeAreaView style={[customeStyle.mainContainer]}>
      <View style={customeStyle.iconAndTextCon}>
        <View style={customeStyle.locationIcon}>
          <Svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M62.5 43.75C62.5 47.0652 61.183 50.2446 58.8388 52.5888C56.4946 54.933 53.3152 56.25 50 56.25C46.6848 56.25 43.5054 54.933 41.1612 52.5888C38.817 50.2446 37.5 47.0652 37.5 43.75C37.5 40.4348 38.817 37.2554 41.1612 34.9112C43.5054 32.567 46.6848 31.25 50 31.25C53.3152 31.25 56.4946 32.567 58.8388 34.9112C61.183 37.2554 62.5 40.4348 62.5 43.75Z"
              stroke="#283D27"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M81.25 43.75C81.25 73.5083 50 90.625 50 90.625C50 90.625 18.75 73.5083 18.75 43.75C18.75 35.462 22.0424 27.5134 27.9029 21.6529C33.7634 15.7924 41.712 12.5 50 12.5C58.288 12.5 66.2366 15.7924 72.0971 21.6529C77.9576 27.5134 81.25 35.462 81.25 43.75Z"
              stroke="#283D27"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
        <View style={[customeStyle.textCon]}>
          <Text style={customeStyle.title}>Choose Your Country</Text>
          <Text style={customeStyle.subtitle}>
            Please select your country to help us for give you a bertter
            expeirence
          </Text>
        </View>
      </View>
      {/* All country container  */}
      <View style={[customeStyle.countryCon, { paddingVertical: 30 }]}>
        {countrys.map((country) => (
          <TouchableOpacity
            key={country?.id}
            setIsSelected={1}
            activeOpacity={0.5}
            onPress={() => selected_item_style_and_async_storage(country)}
            style={[
              country?.id === selectedCountry?.id
                ? [
                    customeStyle.countryView,
                    {
                      borderColor: "#283d27",
                      shadowColor: "#797979",
                      elevation: 10,
                      backgroundColor: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]
                : customeStyle.countryView,
            ]}
          >
            <Image style={customeStyle.countryImg} source={country?.image} />
            <Text style={customeStyle.countryName}>{country?.shortForm}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[customeStyle.btnCon]}>
        <TouchableOpacity
          disabled={!selectedCountry && true}
          onPress={() => {
            handleUseTheAppButton();
          }}
          style={[
            selectedCountry
              ? [customeStyle.useAppBtn, { backgroundColor: "#283d27" }]
              : customeStyle.useAppBtn,
          ]}
        >
          <Text
            style={[
              selectedCountry
                ? [customeStyle.btnText, { color: "#fff" }]
                : customeStyle.btnText,
            ]}
          >
            Use the app
          </Text>
        </TouchableOpacity>

        {/* =================    this is login button =============== */}
        {/* <TouchableOpacity
            style={[customeStyle.loginBtn]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text>Login</Text>
          </TouchableOpacity> */}

        {/* ========================================================= */}
      </View>
    </SafeAreaView>
  );
};

export default ChooseAgainCountry;

/*
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

*/
