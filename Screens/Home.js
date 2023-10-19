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
// import CouponBtn from '../components/shared/couponBtn/CouponBtn';
import {
  useAllcoupon,
  useStore,
  useCarousel,
  // useNotification,
} from "../hooks/AllHooks";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getExpireInAtDays, getUKFormatDate } from "../Utils/formattedDate";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  const navigation = useNavigation();
  const carouselWidth = Dimensions.get("screen").width;
  const itemWidth = Dimensions.get("window").width;

  const [refreshing, setRefreshing] = React.useState(false); //for refreshing
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const { allData } = useAllcoupon();
  const { data, loadData } = useStore();
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
    }, 2000);
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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* top header */}
        <View style={{ backgroundColor: "#fff", marginBottom: 10 }}>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <View style={{ marginTop: 40, paddingLeft: 14, paddingRight: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  color: "black",
                  marginBottom: 15,
                }}
              >
                Mena Coupon
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#595959",
                }}
              >
                Enjoy the best buying experience with discount
              </Text>
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
          <TouchableOpacity
            style={{
              paddingLeft: 22,
              borderWidth: 2,
              borderColor: "#E6E6E6",
              height: 50,
              width: "90%",
              alignSelf: "center",
              borderRadius: 40,
              marginTop: 30,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("Search")}
          >
            <View style={{ opacity: 0.5 }}>
              <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
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

            <Text style={{ marginLeft: 20, opacity: 0.5 }}>
              Search for stores
            </Text>
          </TouchableOpacity>
        </View>

        {/* this is top stores section */}

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            paddingLeft: 20,
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 20,
          }}
        >
          <Text style={{ color: "#000", fontSize: 18 }}>Top Stores</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Store")}>
            <Text style={{ color: "#283D27", fontSize: 12 }}>See All</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#fff",
            paddingBottom: 20,
            paddingLeft: 20,
          }}
        >
          <View
            style={{
              height: 180,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {loadData ? (
              <ActivityIndicator size={"small"} />
            ) : data.length === 0 ? (
              <Text style={{ color: "#797979" }}>empty data</Text>
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
                    style={[
                      item?.storeName.length <= 11
                        ? [styles.topStoersItem, { width: 150 }]
                        : styles.topStoersItem,
                    ]}
                  >
                    <View style={styles.topStoersItemImgCon}>
                      <Image
                        style={styles.topStoresItemImg}
                        source={{ uri: item?.photoURL }}
                      />
                    </View>
                    <View style={styles.topStoersItemStrNameCon}>
                      <Text style={styles.topStoersItemStrName}>
                        {item?.storeName}
                      </Text>
                    </View>
                    <Divider style={styles.topstoredivider} />
                    <View>
                      <Text style={styles.topStorePostType}>
                        {item?.postType}
                      </Text>
                    </View>
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
            containerStyle={{ paddingTop: 5, paddingBottom: 14 }}
            dotsLength={carousels.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: "rgba(0, 0, 0, 0.92)",
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
            inactiveDotStyle={{ width: 10, height: 10 }}
          />
        </View>
        {/* this is best coupon section */}

        <View style={{ paddingTop: 20, backgroundColor: "#fff" }}>
          <View
            style={{
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 18 }}>Best Coupons</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Coupon")}>
              <Text style={{ fontSize: 12, color: "#283D27" }}>See All</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 20,
              paddingTop: 30,
              justifyContent: "center",
            }}
          >
            {loadData ? (
              <ActivityIndicator />
            ) : allData.length === 0 ? (
              <View
                style={{
                  height: 180,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#797979" }}>empty data</Text>
              </View>
            ) : (
              allData?.slice(0, 6).map((data, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("Coupon")}
                  style={styles.couponCartInHome}
                >
                  <View style={styles.imgAndNameMainCon}>
                    <TouchableOpacity
                      style={styles.imgAndNameSecondCon}
                      onPress={() =>
                        navigation.navigate("ViewStore", { ...data })
                      }
                    >
                      <View>
                        <Image
                          style={styles.bestCouponImg}
                          source={{ uri: data?.store?.photoURL }}
                        />
                      </View>
                      <Text style={styles.storeName}>
                        {data?.store?.storeName}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.postTitle}>
                      {data?.postTitle.length > 13
                        ? data?.postTitle.slice(0, 13)
                        : data?.postTitle}
                      ..
                    </Text>
                    <Text style={styles.exDate}>
                      {getUKFormatDate(data?.expireDate)}
                    </Text>
                  </View>
                  <View style={styles.couponBtnCon}>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() =>
                        navigation.navigate("HomeCouponItem", { ...data })
                      }
                    >
                      <View style={[styles.topLayer]}>
                        <Text style={styles.topLayerText}>show code</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
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
  topStoersItem: {
    borderWidth: 1,
    borderRadius: 15,
    marginRight: 20,
    marginTop: 20,
    borderColor: "#E6E6E6",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  topStoersItemImgCon: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    alignSelf: "center",
  },
  topStoresItemImg: {
    width: "50%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 5,
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
  topStorePostType: {
    fontSize: 14,
    color: "#000",
    opacity: 0.5,
    alignSelf: "center",
  },
  carouselContainer: {
    paddingTop: 25,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    // eslint-disable-next-line no-dupe-keys
    alignSelf: "center",
  },
  couponCartInHome: {
    minWidth: 150,
    maxWidth: 230,
    maxHeight: 290,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    elevation: 20,
    // eslint-disable-next-line no-dupe-keys
    shadowColor: "gray",
    padding: 5,
    paddingBottom: 10,
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
    height: "80%",
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
  },
  exDate: {
    fontSize: 12,
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
