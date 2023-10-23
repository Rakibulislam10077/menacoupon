import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Button,
  Linking,
  Dimensions,
} from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import All from "../all/All";
import Coupons from "../coupon/Coupons";
import Deal from "../deal/Deal";
import HowToUse from "../howTouse/HowToUse";
import { Divider } from "react-native-paper";
import { customStyle } from "./style";
import { useNavigation } from "@react-navigation/native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { Clipboard } from "react-native";
import BottomSheet from "../shared/BottomSheet";
import { FavoriteStoreContext } from "../../App";
import {
  useFvStoreData,
  useGetStoreById,
  useGetStoreByStoreName,
  useStore,
} from "../../hooks/AllHooks";
import { Alert } from "react-native";

const ViewStore = (props, isFavourite) => {
  // data from coupon file in screen folder
  const item = props?.route?.params; //prop data
  const navigation = useNavigation(); // navigation
  const [selected, setSelected] = React.useState(0);
  const [backDrop, setBackDrop] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState({});
  const { favouriteData, setRefetch } = useContext(FavoriteStoreContext);
  const { fvStoreData } = useFvStoreData();
  const [store, setStore] = useState({});
  const { getStoreById } = useGetStoreById();
  const { getStoreByStoreName } = useGetStoreByStoreName();
  const bottomSheetHeight = Dimensions.get("screen").height;

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => [550], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setBackDrop(true);
  }, []);
  const handleDismissModal = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  useEffect(() => {
    const handleGetStoreById = async () => {
      const fetchedStore = item?.store?.storeName
        ? await getStoreByStoreName(item?.store?.storeName)
        : await getStoreById(item?._id);
      setStore(fetchedStore);
    };
    handleGetStoreById();
  }, []);

  // const addOrRemoveFav = async (item) => {
  //   await fvStoreData(item);
  //   setRefetch((prev) => prev + 1);
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View
          style={{
            backgroundColor: "#fff",
            borderBottomWidth: 10,
            borderBottomColor: "rgba(0,0,0,0.1)",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 20,
              paddingLeft: 25,
              paddingBottom: 20,
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
            <Text style={{ fontSize: 16, opacity: 0.5, marginLeft: 22 }}>
              Store Details
            </Text>
          </View>
          <View style={customStyle.storeBranding}>
            <TouchableOpacity style={[customStyle.storeImgCon]}>
              <Image
                style={{ width: "80%", height: 50, borderRadius: 5 }}
                resizeMode="contain"
                source={{
                  uri:
                    item?.photoURL ||
                    item?.store?.photoURL ||
                    item?.moreAboutPost?.store?.photoURL,
                }}
              />
            </TouchableOpacity>
            <View style={customStyle.SN_And_Rn_Con}>
              <Text style={customStyle.storeBrandName}>
                {item?.storeName ||
                  item?.store?.storeName ||
                  item?.moreAboutPost?.store?.storeName}
              </Text>
              <Text
                style={{
                  color: "rgba(0,0,0,0.4)",
                  fontSize: 16,
                  marginTop: 5,
                }}
              >
                {
                  store?.data?.description
                  // item?.description ||
                  // item?.store?.description ||
                  // item?.moreAboutPost?.store?.description
                }
              </Text>
            </View>
            {/* favourite_and_rating_container */}
            <View style={customStyle.ST_and_FV}>
              {/* <TouchableOpacity style={customStyle.startCon}>
                                <Svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <G id="Frame" clip-path="url(#clip0_106_2511)">
                                        <Path id="Vector" d="M10.0001 14.7915L4.85677 17.4957L5.83927 11.7682L1.67261 7.71238L7.42261 6.87905L9.99427 1.66821L12.5659 6.87905L18.3159 7.71238L14.1493 11.7682L15.1318 17.4957L10.0001 14.7915Z" stroke="black" stroke-opacity="0.5" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
                                    </G>
                                </Svg>

                            </TouchableOpacity> */}
              <TouchableOpacity
                // onPress={() => addOrRemoveFav(item)}
                onPress={() => {
                  Alert.alert(
                    "Coming soon",
                    "Insha-allah, Very soon we will launch V:1.0.1 include so many features. \n \nThank You"
                  );
                }}
                style={customStyle.startCon}
              >
                {isFavourite ? (
                  <Svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      d="M19.5 12.5719L12 19.9999L4.5 12.5719C4.0053 12.0905 3.61564 11.5119 3.35554 10.8726C3.09545 10.2332 2.97056 9.54688 2.98873 8.85687C3.00691 8.16685 3.16776 7.48807 3.46115 6.86327C3.75455 6.23847 4.17413 5.68119 4.69348 5.22651C5.21283 4.77184 5.8207 4.42962 6.47881 4.22141C7.13691 4.01321 7.831 3.94352 8.51736 4.01673C9.20373 4.08995 9.8675 4.30449 10.4669 4.64684C11.0662 4.98919 11.5882 5.45193 12 6.00593C12.4135 5.45595 12.9361 4.99725 13.5351 4.65854C14.1341 4.31982 14.7965 4.10838 15.4809 4.03745C16.1654 3.96652 16.8571 4.03763 17.5128 4.24632C18.1685 4.45502 18.774 4.79681 19.2915 5.2503C19.8091 5.70379 20.2274 6.25922 20.5204 6.88182C20.8134 7.50443 20.9747 8.18082 20.9943 8.86864C21.0139 9.55647 20.8913 10.2409 20.6341 10.8792C20.377 11.5174 19.9909 12.0958 19.5 12.5779"
                      stroke="black"
                      stroke-opacity="0.6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                    <G clip-path="url(#clip0_106_1859)">
                      <Path
                        d="M5.81583 2.56176C6.55338 2.43609 7.30973 2.47754 8.02913 2.68307C8.74853 2.88859 9.41263 3.25294 9.97249 3.74926L10.0033 3.77676L10.0317 3.75176C10.566 3.28284 11.1942 2.93325 11.8743 2.72633C12.5544 2.5194 13.2709 2.45989 13.9758 2.55176L14.1808 2.58176C15.0694 2.73518 15.9 3.12605 16.5845 3.71298C17.2691 4.29991 17.7822 5.06105 18.0695 5.91579C18.3568 6.77053 18.4076 7.68706 18.2166 8.56832C18.0255 9.44958 17.5997 10.2628 16.9842 10.9218L16.8342 11.0759L16.7942 11.1101L10.5858 17.2593C10.4426 17.4011 10.2527 17.4861 10.0516 17.4987C9.85038 17.5112 9.65146 17.4505 9.49166 17.3276L9.41333 17.2593L3.16916 11.0743C2.50768 10.4306 2.03724 9.61649 1.80996 8.72198C1.58268 7.82747 1.60741 6.88751 1.88143 6.00619C2.15544 5.12487 2.66804 4.33659 3.36246 3.72865C4.05688 3.12071 4.90602 2.71684 5.81583 2.56176Z"
                        fill="#283D27"
                      />
                    </G>
                  </Svg>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={customStyle.TabNavigateContainer}>
          <TouchableOpacity
            onPress={() => {
              setSelected(0);
            }}
            style={{
              borderBottomColor: selected == 0 ? "#283D27" : "#fff",
              borderBottomWidth: 1,
              paddingBottom: 10,
              width: 70,
              marginBottom: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: selected == 0 ? "#000" : "#797979",
                fontWeight: selected == 0 ? "bold" : "400",
              }}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(1);
            }}
            style={{
              borderBottomColor: selected == 1 ? "#283D27" : "#fff",
              borderBottomWidth: 1,
              paddingBottom: 10,
              width: 80,
              marginBottom: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: selected == 1 ? "#000" : "#797979",
                fontWeight: selected == 1 ? "bold" : "400",
              }}
            >
              Coupon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(2);
            }}
            style={{
              borderBottomColor: selected == 2 ? "#283D27" : "#fff",
              borderBottomWidth: 1,
              paddingBottom: 10,
              width: 80,
              marginBottom: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: selected == 2 ? "#000" : "#797979",
                fontWeight: selected == 2 ? "bold" : "400",
              }}
            >
              Deal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected(3);
            }}
            style={{
              borderBottomColor: selected == 3 ? "#283D27" : "#fff",
              borderBottomWidth: 1,
              paddingBottom: 10,
              width: 100,
              marginBottom: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: selected == 3 ? "#000" : "#797979",
                fontWeight: selected == 3 ? "bold" : "400",
              }}
            >
              How to Use
            </Text>
          </TouchableOpacity>
        </View>
        <Divider />
        {selected == 0 ? (
          <All
            handlePresentModalPress={handlePresentModalPress}
            setIsBottomSheetOpen={setIsBottomSheetOpen}
            item={item}
            storeName={
              item?.storeName ||
              item?.store?.storeName ||
              item?.moreAboutPost?.store?.storeName
            }
          />
        ) : selected == 1 ? (
          <Coupons
            setIsBottomSheetOpen={setIsBottomSheetOpen}
            item={item}
            handlePresentModalPress={handlePresentModalPress}
            storeName={
              item?.storeName ||
              item?.store?.storeName ||
              item?.moreAboutPost?.store?.storeName
            }
            postType="coupon"
          />
        ) : selected == 2 ? (
          <Deal
            handlePresentModalPress={handlePresentModalPress}
            item={item}
            setIsBottomSheetOpen={setIsBottomSheetOpen}
            storeName={
              item?.storeName ||
              item?.store?.storeName ||
              item?.moreAboutPost?.store?.storeName
            }
            postType="deal"
          />
        ) : (
          <HowToUse item={store} />
        )}
        {/* bottom visit button container */}
        <View style={customStyle.bottomBtnForVisit}>
          <View style={customStyle.imgAndTextCon}>
            <Image
              style={customStyle.bttmBtnImg}
              resizeMode="contain"
              source={{
                uri:
                  item?.photoURL ||
                  item?.store?.photoURL ||
                  item?.moreAboutPost?.store?.photoURL,
              }}
            />
            <Text style={customStyle.bttmBtnText}>
              {item?.storeName?.slice(0, 15) ||
                item?.store?.storeName?.slice(0, 15) ||
                item?.moreAboutPost?.store?.storeName.slice(0, 5)}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL(item?.storeExternalLink)}
            style={customStyle.visitBtn}
          >
            <Text style={customStyle.visitBtnText}>Visit store</Text>
          </TouchableOpacity>
        </View>

        {/* this is bottomSheet */}
        {isBottomSheetOpen && (
          <BottomSheet
            item={isBottomSheetOpen}
            handleDismissModal={handleDismissModal}
            handlePresentModalPress={handlePresentModalPress}
            bottomSheetModalRef={bottomSheetModalRef}
            backDrop={backDrop}
            snapPoints={snapPoints}
          />
        )}
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default ViewStore;
