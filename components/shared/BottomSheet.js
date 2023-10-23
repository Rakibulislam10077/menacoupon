import {
  Clipboard,
  Image,
  Linking,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { getExpireInAtDays } from "../../Utils/formattedDate";
import { LinkingContext } from "@react-navigation/native";

const BottomSheet = ({
  item,
  data,
  handleDismissModal,
  bottomSheetModalRef,
  backDrop,
  snapPoints,
}) => {
  const showToastWithGravity = (item) => {
    ToastAndroid.showWithGravity(
      `copy your coupon code ${item?.couponCode || data?.couponCode}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    Clipboard.setString(item?.couponCode);
  };
  function openSite(site) {
    Linking.openURL(site);
  }

  const storeDescription = item?.description || data?.description;
  const postDescription = item?.postDescription || data?.postDescription;
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      containerStyle={{
        backgroundColor: backDrop && "rgba(0,0,0,0.5)",
      }}
      snapPoints={snapPoints}
      // index={1}
      animateOnMount={true}
    >
      <View style={styles.contentContainer}>
        <View
          style={{
            flex: 3,
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.hideModal}
            onPress={() => handleDismissModal()} // Dismiss modal
          >
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <G clip-path="url(#clip0_433_11586)">
                <Path
                  d="M18 6L6 18"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M6 6L18 18"
                  stroke="black"
                  stroke-opacity="0.7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_433_11586">
                  <Rect width="24" height="24" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.fvCouponCon}> */}
          {/* <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M19.5 12.5719L12 19.9999L4.5 12.5719C4.0053 12.0905 3.61564 11.5119 3.35554 10.8726C3.09545 10.2332 2.97056 9.54688 2.98873 8.85687C3.00691 8.16685 3.16776 7.48807 3.46115 6.86327C3.75455 6.23847 4.17413 5.68119 4.69348 5.22651C5.21283 4.77184 5.8207 4.42962 6.47881 4.22141C7.13691 4.01321 7.831 3.94352 8.51736 4.01673C9.20373 4.08995 9.8675 4.30449 10.4669 4.64684C11.0662 4.98919 11.5882 5.45193 12 6.00593C12.4135 5.45595 12.9361 4.99725 13.5351 4.65854C14.1341 4.31982 14.7965 4.10838 15.4809 4.03745C16.1654 3.96652 16.8571 4.03763 17.5128 4.24632C18.1685 4.45502 18.774 4.79681 19.2915 5.2503C19.8091 5.70379 20.2274 6.25922 20.5204 6.88182C20.8134 7.50443 20.9747 8.18082 20.9943 8.86864C21.0139 9.55647 20.8913 10.2409 20.6341 10.8792C20.377 11.5174 19.9909 12.0958 19.5 12.5779" stroke="black" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg> */}

          {/* <Svg
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
        </TouchableOpacity> */}
          <View style={styles.BSimgCon}>
            <Image
              source={{
                uri:
                  item?.photoURL ||
                  item?.store?.photoURL ||
                  data?.store?.photoURL,
              }}
              style={styles.BSimg}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.BSstoreN}>
              {item?.storeName ||
                item?.store?.storeName ||
                data?.store?.storeName}
            </Text>
          </View>
          <View style={{ paddingHorizontal: 30 }}>
            <Text style={styles.BSstorePt}>
              {item?.postTitle || data?.postTitle}
            </Text>
          </View>
          <View style={{ width: "80%", alignSelf: "center" }}>
            <Text style={styles.postDescription}>
              {/* ================================== */}
              {postDescription || storeDescription}
            </Text>
          </View>
          <View style={styles.BScouponCodeCon}>
            <Text style={styles.BScodeCT}>Code Copied</Text>
            <View style={styles.BScouponCodeInCon}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ marginRight: 10 }}>
                  {(data?.isVerified || item?.isVerified) && (
                    <Svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <G clip-path="url(#clip0_266_1827)">
                        <Path
                          d="M8.00662 1.34067C8.52514 1.3407 9.0259 1.52958 9.41528 1.872L9.51795 1.96867L9.98328 2.434C10.111 2.56088 10.2778 2.64097 10.4566 2.66133L10.5466 2.66667H11.2133C11.7581 2.66664 12.2823 2.87505 12.6783 3.24916C13.0744 3.62327 13.3123 4.13474 13.3433 4.67867L13.3466 4.8V5.46667C13.3466 5.64667 13.4079 5.822 13.5186 5.962L13.5786 6.02867L14.0433 6.494C14.4284 6.87697 14.653 7.39241 14.6712 7.93525C14.6894 8.47808 14.4999 9.00742 14.1413 9.41533L14.0446 9.518L13.5793 9.98333C13.4524 10.111 13.3723 10.2778 13.3519 10.4567L13.3466 10.5467V11.2133C13.3466 11.7581 13.1382 12.2823 12.7641 12.6784C12.39 13.0744 11.8785 13.3123 11.3346 13.3433L11.2133 13.3467H10.5466C10.3669 13.3467 10.1924 13.4073 10.0513 13.5187L9.98462 13.5787L9.51928 14.0433C9.13632 14.4285 8.62087 14.6531 8.07804 14.6713C7.5352 14.6895 7.00586 14.4999 6.59795 14.1413L6.49528 14.0447L6.02995 13.5793C5.90224 13.4525 5.73548 13.3724 5.55662 13.352L5.46662 13.3467H4.79995C4.25514 13.3467 3.73096 13.1383 3.3349 12.7642C2.93885 12.3901 2.70094 11.8786 2.66995 11.3347L2.66662 11.2133V10.5467C2.66656 10.3669 2.60597 10.1924 2.49462 10.0513L2.43462 9.98467L1.96995 9.51933C1.5848 9.13637 1.36023 8.62092 1.34202 8.07809C1.32381 7.53526 1.51333 7.00592 1.87195 6.598L1.96862 6.49533L2.43395 6.03C2.56082 5.90229 2.64092 5.73553 2.66128 5.55667L2.66662 5.46667V4.8L2.66995 4.67867C2.69972 4.15563 2.9209 3.66183 3.29134 3.29139C3.66178 2.92095 4.15558 2.69977 4.67862 2.67L4.79995 2.66667H5.46662C5.64636 2.66661 5.82085 2.60602 5.96195 2.49467L6.02862 2.43467L6.49395 1.97C6.69217 1.77059 6.92786 1.61234 7.18746 1.50433C7.44706 1.39633 7.72545 1.34071 8.00662 1.34067ZM10.4713 6.19533C10.3463 6.07035 10.1767 6.00014 9.99995 6.00014C9.82317 6.00014 9.65363 6.07035 9.52861 6.19533L7.33328 8.39L6.47128 7.52867L6.40862 7.47333C6.27462 7.36973 6.10621 7.32101 5.9376 7.33707C5.76898 7.35313 5.6128 7.43277 5.50078 7.55982C5.38876 7.68686 5.32929 7.85178 5.33446 8.02108C5.33963 8.19038 5.40905 8.35136 5.52862 8.47133L6.86195 9.80467L6.92462 9.86C7.05288 9.9595 7.21305 10.0088 7.37507 9.99859C7.53709 9.98841 7.68982 9.91945 7.80462 9.80467L10.4713 7.138L10.5266 7.07533C10.6261 6.94706 10.6754 6.7869 10.6652 6.62488C10.655 6.46286 10.5861 6.31013 10.4713 6.19533Z"
                          fill="#0EAA00"
                        />
                      </G>
                      <Defs>
                        <ClipPath id="clip0_266_1827">
                          <Rect width="16" height="16" fill="white" />
                        </ClipPath>
                      </Defs>
                    </Svg>
                  )}
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "600",
                    alignSelf: "center",
                  }}
                >
                  {item?.couponCode || data?.couponCode}
                </Text>
              </View>
              <TouchableOpacity onPress={() => showToastWithGravity(item)}>
                <Svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <G clip-path="url(#clip0_106_2716)">
                    <Path
                      d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                      stroke="#B3B3B3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                      stroke="#B3B3B3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_106_2716">
                      <Rect width="24" height="24" fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              color: "rgba(0, 0, 0, 0.40)",
              fontSize: 16,
              marginTop: 10,
            }}
          >
            End in{" "}
            <Text style={{ fontWeight: "700" }}>
              {getExpireInAtDays(item?.expireDate || data?.expireDate)}
            </Text>{" "}
            days
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              openSite(item?.externalLink || data?.externalLink);
            }}
            style={{
              backgroundColor: "#283d27",
              width: "80%",
              height: 50,
              borderRadius: 30,
              marginVertical: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              Buy Now!
            </Text>
          </TouchableOpacity>
          {item?.postType === "coupon" && (
            <Text style={{ color: "rgba(0,0,0,0.6)" }}>
              Don’t forget to use your code during checkout!
            </Text>
          )}
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  hideModal: {
    position: "absolute",
    top: 10,
    right: 20,
    padding: 5,
  },
  fvCouponCon: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
    padding: 5,
    position: "absolute",
    right: 20,
    top: 50,
  },
  BSimgCon: {
    height: 90,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  BSimg: {
    width: "80%",
    height: "60%",
    borderRadius: 6,
  },
  BSstoreN: {
    fontSize: 18,
    opacity: 0.5,
    marginBottom: 25,
  },
  BSstorePt: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  postDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
    opacity: 0.6,
  },
  BScouponCodeCon: {
    width: "60%",
    height: 70,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 50,
    marginTop: 30,
  },
  BScodeCT: {
    marginTop: -10,
    backgroundColor: "#fff",
    alignSelf: "center",
    color: "rgba(0,0,0,0.5)",
    paddingHorizontal: 5,
    textAlign: "center",
  },
  BScouponCodeInCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 41,
    paddingRight: 30,
    alignItems: "center",
    height: " 70%",
  },
});
