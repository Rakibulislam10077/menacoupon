/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import {
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import Svg, { Path, G, Rect, ClipPath, Defs } from "react-native-svg";
import { ActivityIndicator, Divider } from "react-native-paper";
import React, { useEffect, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselItem from "../components/carousel/CaruoselITem";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useAllcoupon,
  useStore,
  useCarousel,
  useReabuildCount,
} from "../hooks/AllHooks";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getExpireInAtDays } from "../Utils/formattedDate";
import { TouchableOpacity } from "react-native-gesture-handler";
import { width } from "../Utils/CustomWidthAndHeight";

export let refetchHomeStore;
export let refetchHomePost;

const cartWidth = Dimensions.get("window").width;
const Home = () => {
  const navigation = useNavigation();
  const carouselWidth = Dimensions.get("screen").width;
  const itemWidth = Dimensions.get("window").width;
  const [refreshing, setRefreshing] = React.useState(false); //for refreshing
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const { allData, setRefetchPost } = useAllcoupon();
  const { data, isLoading, setRefetchStore } = useStore();
  refetchHomeStore = setRefetchStore;
  refetchHomePost = setRefetchPost;
  const { getRevealedCount } = useReabuildCount();
  // const { notify } = useNotification();
  const { carousels } = useCarousel();
  const [countryPhotoURL, setCountryPhotoURL] = useState("");
  const countrys = [
    { id: 1, name: "Qatar", image: require("../assets/images/qatar.png") },
    { id: 2, name: "Oman", image: require("../assets/images/oman.png") },
    {
      id: 3,
      name: "Saudi Arabia",
      image: require("../assets/images/arabia.png"),
    },
    { id: 4, name: "Egypt", image: require("../assets/images/egypt.png") },
    {
      id: 5,
      name: "United Arab Emirates",
      image: require("../assets/images/emirates.png"),
    },
    { id: 6, name: "Kuwait", image: require("../assets/images/kuwait.png") },
    { id: 7, name: "Bahrain", image: require("../assets/images/bahrain.png") },
  ];
  // refreshing indicator function
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setRefetchPost((prev) => prev + 1);
      setRefetchStore((prev) => prev + 1);
    }, 500);
  }, []);
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("couponCountry");
      const selected_country = countrys.find(
        (country) => country.name === userCountry
      );
      setCountryPhotoURL(selected_country.image);
    };
    getCountry();
  }, []);
  // ========================reset country function =====================
  // const handleCountryAsyncEvent = async () => {
  //   // const getSelectedCouponCountry = await AsyncStorage.getItem("getCountry");
  //   // if (getSelectedCouponCountry) {
  //   //   AsyncStorage.removeItem(getSelectedCouponCountry);
  //   // }
  //   navigation.navigate("ChooseCountry");
  // };

  // const handleModalButton = (data) => {
  //   setClickedButton(true);

  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* top header */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 5,
          backgroundColor: "#fff",
          height: 70,
        }}
      >
        <View
          style={{
            marginTop: 5,
            paddingLeft: 14,
            paddingRight: 20,
            flex: 3.3,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Svg
            width="54"
            height="54"
            viewBox="0 0 486 386"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M263.45 24.5704L286.54 43.4104C283.24 47.0504 280.47 50.5404 278.25 53.6904L253.93 33.8404C251.44 31.8004 248.04 31.2904 244.85 32.4604L152.51 66.2304C150.68 66.9004 149.06 68.0804 147.82 69.6304L9.86016 242.44C8.17016 244.57 7.33018 247.17 7.52018 249.79C7.72018 252.41 8.90016 254.7 10.8602 256.27L161.16 376.34C163.13 377.92 165.64 378.57 168.22 378.17C170.81 377.78 173.17 376.39 174.87 374.26L219.91 317.82H228.82L181.26 377.41C174.46 385.93 162.54 387.74 154.67 381.45L7.30018 263.73C3.50018 260.68 1.19018 256.22 0.830176 251.15C0.460176 246.08 2.08017 241.02 5.37017 236.89L144.95 62.0504C147.36 59.0204 150.52 56.7404 154.07 55.4404L245.85 21.8704C252.05 19.6004 258.63 20.6104 263.45 24.5504V24.5704Z"
              fill="#24B098"
            />
            <Path
              d="M337.52 96.3001L332.74 133.73L327.56 165.02L324.14 160.69H318.78L324.2 124.93L327.43 99.6701C327.85 96.3701 326.65 93.2201 324.22 91.2301L289.17 62.6301C291 59.4001 293.55 55.7301 296.86 51.8501L331.3 79.9601C336.03 83.8101 338.35 89.9301 337.53 96.3101L337.52 96.3001Z"
              fill="#24B098"
            />
            <Path
              d="M276.02 62.9603C274.44 66.8003 274.03 70.4403 274.79 73.8403C276.44 81.1703 282.95 84.5703 283.22 84.7103L284.76 85.5003L286.97 75.5403L285.43 75.5603C283.87 75.5803 283.09 74.8603 282.9 73.2203C282.78 72.1303 282.95 70.7303 283.4 69.1003C286.76 56.8803 306.21 31.1203 342.36 17.2903C372.11 5.90028 382.82 8.00028 386.56 11.7603C389.73 14.9503 388.21 19.8303 388.04 20.3503C371.39 53.0003 332.99 67.7903 332.6 67.9403L330.3 68.8103L337.05 74.2003L337.76 73.9103C362.62 63.5803 381.69 43.3103 381.88 43.1003C393.36 30.8703 398.2 20.6203 396.26 12.6203C394.04 3.42027 383.76 0.910272 383.3 0.810272L383.01 0.780273C328.95 1.78027 291.13 38.5803 278.68 57.9003C277.58 59.6203 276.69 61.3003 276.01 62.9503L276.02 62.9603Z"
              fill="#24B098"
            />
            <Path
              d="M319.62 99.2203L311.99 160.68H214.68V160.81H180.95L159.38 190.46L137.8 160.81H103.85V266.72H109.24C105.83 271.92 103.85 278.12 103.85 284.79C103.85 303.01 118.68 317.83 136.9 317.83H210.15L168.88 369.51C168.46 370.04 167.92 370.2 167.63 370.24C167.34 370.29 166.79 370.29 166.29 369.9L16.0001 249.84C16.0001 249.84 15.9301 249.76 15.8901 249.73L14.6001 248.72L15.7601 247.26C15.7601 247.26 15.7801 247.23 15.7901 247.21L153.77 74.3803C154 74.0903 154.3 73.8803 154.64 73.7503L246.98 39.9803C247.11 39.9303 247.23 39.9003 247.36 39.8903C247.85 39.8103 248.32 39.9403 248.69 40.2403L269.57 57.2903C269.53 57.3703 269.5 57.4403 269.46 57.5203C269.28 57.8803 269.1 58.2403 268.93 58.6003C260.14 62.5303 254.3 71.8703 254.99 81.5103C255.84 93.3003 266.04 101.44 277.73 99.6603C282.22 98.9803 286.43 96.9003 289.86 93.6803C290.08 93.4803 290.31 93.2603 290.52 93.0503L290.63 92.9503C294.06 89.4403 296.27 85.0703 297.07 80.4803C297.11 80.2603 297.16 80.0503 297.2 79.8303L319 97.6303C319.45 98.0003 319.67 98.5903 319.6 99.2103L319.62 99.2203Z"
              fill="#EA8313"
            />
            <Path
              d="M296.79 273.291C289.8 273.291 285.67 278.541 285.86 285.071C286 290.471 288.91 296.241 296.65 296.241C304.39 296.241 307.3 290.421 307.39 285.031C307.48 279.541 304.34 273.441 296.79 273.301V273.291Z"
              fill="#24B098"
            />
            <Path
              d="M176.67 273.291C169.68 273.291 165.55 278.541 165.74 285.071C165.88 290.471 168.79 296.241 176.53 296.241C184.27 296.241 187.18 290.421 187.27 285.031C187.36 279.541 184.22 273.441 176.67 273.301V273.291Z"
              fill="#24B098"
            />
            <Path
              d="M259.81 274.18H250.52V285.82H259.81C267.74 285.82 267.69 274.18 259.81 274.18Z"
              fill="#24B098"
            />
            <Path
              d="M136.9 261.93C124.28 261.93 114.04 272.16 114.04 284.79C114.04 297.41 124.27 307.65 136.9 307.65H360.8L382.04 261.93H136.9ZM140.39 301.91C128.19 301.91 123.03 293.51 122.98 284.97C122.93 276.38 128.52 267.66 140.39 267.66C144.85 267.66 149.07 269.35 152.45 272.68L148.32 276.67C146.16 274.56 143.25 273.57 140.39 273.57C132.46 273.57 129.04 279.48 129.08 284.97C129.13 290.41 132.27 296.09 140.39 296.09C143.25 296.09 146.49 294.92 148.65 292.76L152.87 297.03C149.49 300.36 145.13 301.91 140.39 301.91ZM176.52 301.91C164.98 301.91 159.63 293.61 159.63 284.97C159.63 274.6 167.14 267.66 176.66 267.66C187.87 267.75 193.46 276.39 193.36 284.93C193.27 293.42 188.06 301.91 176.52 301.91ZM232.26 287.18C232.26 296.89 226.3 301.87 218.04 301.87C209.78 301.87 203.45 297.08 203.45 287.18V268.37H209.6V287.18C209.6 293.09 212.98 296.23 218.09 296.23C223.2 296.23 226.11 292.81 226.11 287.18V268.37H232.26V287.18ZM259.8 291.5H250.51V301.17H244.32V268.33C249.43 268.33 254.69 268.28 259.8 268.28C275.94 268.28 275.99 291.36 259.8 291.5ZM296.63 301.92C285.09 301.92 279.74 293.62 279.74 284.98C279.74 274.61 287.25 267.67 296.77 267.67C307.98 267.76 313.57 276.4 313.47 284.94C313.38 293.43 308.17 301.92 296.63 301.92ZM347.63 301.17L330.18 279.31V301.17H323.99V268.33H329.01L346.46 290.43V268.33H352.65V301.17H347.63Z"
              fill="#24B098"
            />
            <Path
              d="M204.59 256.53V170.99H186.14L159.38 207.77L132.62 170.99H114.04V256.53H130.17V194.33L157.42 231.6H160.6L188.46 194.45V256.53H204.59Z"
              fill="#EA8313"
            />
            <Path
              d="M224.88 256.4H288.91V240.51H240.89V221.2H287.2V206.17H240.89V186.5H288.91V170.86H224.88V256.4Z"
              fill="#EA8313"
            />
            <Path
              d="M380.8 256.4V170.87H364.67V228.42L319.21 170.87H306.14V256.4H322.27V199.46L367.72 256.4H380.8Z"
              fill="#EA8313"
            />
            <Path
              d="M447.27 170.87H429.67L387.37 261.93L366.13 307.65H383.73L405.7 261.93L416.1 240.28H460.82L468.03 256.41H485.63L447.26 170.87H447.27ZM422.59 225.25L438.48 188.84L454.37 225.25H422.6H422.59Z"
              fill="#EA8313"
            />
            <Path
              d="M410.67 261.93L389.84 307.65H462.78C475.4 307.65 485.64 297.42 485.64 284.79C485.64 272.17 475.41 261.93 462.78 261.93H410.67Z"
              fill="#24B098"
            />
          </Svg>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "black",
              marginBottom: 5,
              marginLeft: 15,
            }}
          >
            Mena Coupon
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.searchButton}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Search")}
          >
            <View style={{ opacity: 0.5 }}>
              <Svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                <G clip-path="url(#clip0_106_1688)">
                  <Path
                    d="M17.5 17.5L12.5 12.5"
                    stroke="black"
                    stroke-opacity="0.5"
                    stroke-width="0.833333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M2.5 8.33333C2.5 9.09938 2.65088 9.85792 2.94404 10.5657C3.23719 11.2734 3.66687 11.9164 4.20854 12.4581C4.75022 12.9998 5.39328 13.4295 6.10101 13.7226C6.80875 14.0158 7.56729 14.1667 8.33333 14.1667C9.09938 14.1667 9.85792 14.0158 10.5657 13.7226C11.2734 13.4295 11.9164 12.9998 12.4581 12.4581C12.9998 11.9164 13.4295 11.2734 13.7226 10.5657C14.0158 9.85792 14.1667 9.09938 14.1667 8.33333C14.1667 7.56729 14.0158 6.80875 13.7226 6.10101C13.4295 5.39328 12.9998 4.75022 12.4581 4.20854C11.9164 3.66687 11.2734 3.23719 10.5657 2.94404C9.85792 2.65088 9.09938 2.5 8.33333 2.5C7.56729 2.5 6.80875 2.65088 6.10101 2.94404C5.39328 3.23719 4.75022 3.66687 4.20854 4.20854C3.66687 4.75022 3.23719 5.39328 2.94404 6.10101C2.65088 6.80875 2.5 7.56729 2.5 8.33333Z"
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
        {/* ============================== reset country ======================== */}

        {/* <TouchableOpacity
              style={{
                width: 40,
                height: 25,
                position: "absolute",
                top: 30,
                right: 30,
              }}
              onPress={() => handleCountryAsyncEvent()}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={countryPhotoURL}
              />
            </TouchableOpacity> */}
        {/* ============================ Notification icon ======================== */}
        {/* <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  borderWidth: 2,
                  padding: 12,
                  borderColor: "#e6e6e6",
                  borderRadius: 50,
                }}
              >
                {!notify && (
                  <Badge
                    width={notify > 9 ? 25 : 20}
                    style={{
                      position: "absolute",
                      top: -6,
                      left: 30,
                      backgroundColor: "red",
                    }}
                  >
                    <Text style={{ fontSize: 14, color: "#fff" }}>
                      {notify > 9 ? "9+" : notify}
                    </Text>
                  </Badge>
                )}
                <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                  <G clip-path="url(#clip0_106_1679)">
                    <Path
                      d="M8.3335 4.16667C8.3335 3.72464 8.50909 3.30072 8.82165 2.98816C9.13421 2.67559 9.55814 2.5 10.0002 2.5C10.4422 2.5 10.8661 2.67559 11.1787 2.98816C11.4912 3.30072 11.6668 3.72464 11.6668 4.16667C12.6238 4.61919 13.4397 5.32361 14.0269 6.20442C14.6141 7.08523 14.9505 8.10923 15.0002 9.16667V11.6667C15.0629 12.1848 15.2464 12.6809 15.5358 13.1151C15.8253 13.5493 16.2127 13.9095 16.6668 14.1667H3.3335C3.78761 13.9095 4.175 13.5493 4.46449 13.1151C4.75397 12.6809 4.93745 12.1848 5.00016 11.6667V9.16667C5.0498 8.10923 5.38625 7.08523 5.97345 6.20442C6.56066 5.32361 7.37649 4.61919 8.3335 4.16667Z"
                      stroke="black"
                      stroke-opacity="0.7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      d="M7.5 14.1667V15.0001C7.5 15.6631 7.76339 16.299 8.23223 16.7678C8.70107 17.2367 9.33696 17.5001 10 17.5001C10.663 17.5001 11.2989 17.2367 11.7678 16.7678C12.2366 16.299 12.5 15.6631 12.5 15.0001V14.1667"
                      stroke="black"
                      stroke-opacity="0.7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_106_1679">
                      <Rect width="20" height="20" fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
              </TouchableOpacity> */}
      </View>
      {/* this is searchbar */}

      {/* this is top stores section */}
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.seeAllStoreContainer}>
          <Text style={{ color: "#000", fontSize: 18 }}>Top Stores</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Store")}>
            <Text style={{ color: "#283D27", fontSize: 12 }}>See All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            paddingLeft: 10,
          }}
        >
          <View
            style={{
              height: 110,
            }}
          >
            {isLoading ? (
              <ActivityIndicator size={"small"} />
            ) : data.length === 0 ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Text style={{ color: "#ff0000" }}>empty data</Text>
              </View>
            ) : (
              <FlatList
                data={data.sort((a, b) => a - b)}
                horizontal
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    Pressable
                    onPress={() =>
                      navigation.navigate("ViewStore", { ...item })
                    }
                  >
                    {/* <View style={styles.topStoersItemImgCon}> */}
                    <View style={[[styles.topStoersItem]]}>
                      <Image
                        resizeMode="contain"
                        style={styles.topStoresItemImg}
                        source={{ uri: item?.photoURL }}
                      />
                    </View>
                    {/* </View> */}
                    {/* <View style={styles.topStoersItemStrNameCon}>
                      <Text style={styles.topStoersItemStrName}>
                        {item?.storeName}
                      </Text>
                    </View>
                    <Divider style={styles.topstoredivider} />
                    <Text style={styles.topStoreTotalPosts}>
                      {item?.totalPosts} offers
                    </Text> */}
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
        </View>

        {/* this is carousel section */}
        <View style={styles.carouselContainer}>
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={carousels}
            renderItem={({ item }) => <CarouselItem item={item} />}
            ref={isCarousel}
            loop={true}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={carouselWidth}
            itemWidth={itemWidth}
            // slideStyle={{ display: 'flex', alignItems: 'center', }}
            onSnapToItem={(index) => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            containerStyle={{
              paddingTop: 0,
              paddingBottom: 10,
            }}
            dotsLength={carousels.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={styles.carouselDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
            tappableDots={true}
            inactiveDotStyle={{ width: 6, height: 6 }}
          />
        </View>
        {/* this is best coupon section */}

        <View style={{ paddingTop: 20, backgroundColor: "#fff" }}>
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>Best Coupons</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Coupon")}>
              <Text style={{ fontSize: 12, color: "#283D27" }}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cartContainer}>
            {isLoading ? (
              <View
                style={{
                  height: 50,
                  width: "95%",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <ActivityIndicator
                  size={"small"}
                  style={{ alignSelf: "center" }}
                />
              </View>
            ) : allData.length === 0 ? (
              <View
                style={{
                  height: 180,
                  width: "95%",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text style={{ color: "#797979", alignSelf: "center" }}>
                  empty data
                </Text>
              </View>
            ) : (
              allData?.map((data, index) => (
                <View key={index} style={styles.couponCartInHome}>
                  <View style={styles.imgAndNameMainCon}>
                    <TouchableOpacity
                      style={styles.imgAndNameSecondCon}
                      onPress={() => {
                        navigation.navigate("ViewStore", { ...data });
                      }}
                    >
                      <Image
                        style={styles.bestCouponImg}
                        resizeMode="contain"
                        source={{ uri: data?.store?.photoURL }}
                      />
                      <Text style={styles.storeName}>
                        {data?.store?.storeName?.slice(0, 15)}..
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text numberOfLines={2} style={styles.postTitle}>
                      {data?.postTitle?.length >= 40
                        ? data?.postTitle?.slice(0, 38)
                        : data?.postTitle}
                      {data?.postTitle?.length >= 40 && ".."}
                    </Text>
                    <Text style={styles.exDate}>
                      End in{" "}
                      <Text style={{ fontWeight: "600" }}>
                        {getExpireInAtDays(data?.expireDate)}
                      </Text>{" "}
                      days
                    </Text>
                  </View>
                  <View style={styles.couponBtnCon}>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() => {
                        // fetch revealed post put api
                        getRevealedCount(data?._id);
                        navigation.navigate("HomeCouponItem", { ...data });
                      }}
                    >
                      <View style={[styles.topLayer]}>
                        <Text style={styles.topLayerText}>Show Code</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>
      {/* bottom  */}
      {/* {isBottomSheetOpen && (
          <BottomSheet
            data={isBottomSheetOpen}
            handleDismissModal={handleDismissModal}
            bottomSheetModalRef={bottomSheetModalRef}
            backDrop={backDrop}
            snapPoints={snapPoints}
          />
        )} */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  searchButton: {
    borderWidth: 2,
    borderColor: "#E6E6E6",
    height: 45,
    width: 45,
    borderRadius: 50,
    marginTop: 5,
    marginRight: 10,
    // marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  seeAllStoreContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
    paddingTop: 10,
  },
  topStoersItem: {
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 20,
    borderColor: "#E6E6E6",
    width: cartWidth < 340 ? 50 : 70,
    height: cartWidth < 340 ? 50 : 70,
    borderRadius: 50,
    padding: 15,
    // alignContent: "center",
    // justifyContent: "center",
  },
  // topStoersItemImgCon: {
  //   backgroundColor: "red",
  //   width: "100%",
  //   height: 50,
  //   alignSelf: "center",
  // },
  topStoresItemImg: {
    width: "99%",
    height: "99%",
    borderRadius: 50,
  },
  topStoersItemStrNameCon: {
    width: "100%",
    marginTop: 15,
  },
  topStoersItemStrName: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
  },
  topstoredivider: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "#797979",
    opacity: 0.2,
  },
  topStoreTotalPosts: {
    fontSize: 14,
    color: "rgba(0,0,0,0.4)",
    alignSelf: "center",
  },
  carouselContainer: {
    paddingTop: 15,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 250,
    backgroundColor: "#ffffff",
    marginTop: 5,
    marginBottom: 5,
  },
  carouselDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
  cartContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 15,
    paddingTop: 30,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 50,
    width: width,
  },
  couponCartInHome: {
    // width: (cartWidth >= 420 && 186) || (cartWidth < 400 ? 168 : 180),
    width: cartWidth > 500 ? "32%" : "48%",
    maxHeight: 290,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    elevation: 20,
    shadowColor: "gray",
    padding: 5,
    paddingBottom: 10,
    justifyContent: "space-around",
  },
  imgAndNameMainCon: {
    backgroundColor: "rgba(154, 134, 121, 0.05)",
    borderRadius: 5,
    marginBottom: 20,
    paddingTop: 17,
    height: "46%",
  },
  imgAndNameSecondCon: {
    width: "90%",
    height: "100%",
    alignSelf: "center",
  },
  bestCouponImg: {
    width: "60%",
    height: 60,
    alignSelf: "center",
    borderRadius: 6,
  },
  storeName: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 14,
    color: "rgba(0,0,0,0.7)",
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
    textAlign: "center",
  },
  exDate: {
    fontSize: 14,
    color: "rgba(0,0,0,0.4)",
    alignSelf: "center",
    marginBottom: 18,
  },
  couponBtnCon: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  topLayer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#283D27",
    height: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  topLayerText: {
    color: "#fff",
  },
  hiddenLayer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 25,
    borderStyle: "dashed",
    borderColor: "#283D27",
    borderWidth: 1,
    borderRadius: 25,
    height: 37,
  },
  hiddenText: {
    fontWeight: "700",
  },
});
