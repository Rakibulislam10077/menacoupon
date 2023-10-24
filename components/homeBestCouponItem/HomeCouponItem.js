import React from "react";
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
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { width } from "../../Utils/CustomWidthAndHeight";
import { SafeAreaView } from "react-native-safe-area-context";
import { getExpireInAtDays } from "../../Utils/formattedDate";

export default function HomeCouponItem(props) {
  const data = props?.route?.params;
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      `copy your coupon code ${data?.couponCode}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    Clipboard.setString(data?.couponCode);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff" }}
    >
      <View style={styles.contentContainer}>
        <View style={{ flex: 3, width: "100%", alignItems: "center" }}>
          <View style={styles.BSimgCon}>
            <Image
              source={{
                uri: data?.store?.photoURL,
              }}
              style={styles.BSimg}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.BSstoreN}>{data?.store?.storeName}</Text>
          </View>
          <View>
            <Text style={styles.BSstorePt}>{data?.postTitle}</Text>
          </View>
          <View style={{ width: "80%", alignSelf: "center" }}>
            <Text style={styles.postDescription}>{data?.postDescription}</Text>
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
                  {data?.isVerified && (
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
                  {data?.couponCode}
                </Text>
              </View>
              <TouchableOpacity onPress={() => showToastWithGravity()}>
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
              {getExpireInAtDays(data?.expireDate)}
            </Text>{" "}
            days
          </Text>
        </View>
        <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => Linking.openURL(data?.externalLink)}
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
          {data?.postType === "coupon" && (
            <Text style={{ color: "rgba(0,0,0,0.6)" }}>
              Don’t forget to use your code during checkout!
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    height: 600,
    borderRadius: 20,
    shadowColor: "#797979",
    elevation: 15,
    paddingHorizontal: 20,
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
    backgroundColor: "white",
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
    fontSize: 16,
    opacity: 0.5,
    marginBottom: 25,
  },
  BSstorePt: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  postDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    opacity: 0.6,
  },
  BScouponCodeCon: {
    width: "75%",
    height: 70,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 50,
    marginTop: 40,
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
