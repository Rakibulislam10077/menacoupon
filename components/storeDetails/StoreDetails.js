import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { customStyle } from "./style";
import { Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Rect, ClipPath, Defs, Path, G, Svg } from "react-native-svg";
import StoreButton from "../../components/shared/StoreButton";
import DealButton from "../shared/DealButton";
import { getExpireInAtDays, getUKFormatDate } from "../../Utils/formattedDate";
import { useStore } from "../../hooks/AllHooks";
import { style } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";

const StoreDetails = ({
  POitem,
  data,
  item,
  handlePresentModalPress,
  setIsBottomSheetOpen,
}) => {
  const navigation = useNavigation();

  const description = item?.postDescription || POitem?.postDescription;

  return (
    <View View style={customStyle.storeDetailsCard}>
      <View style={[customStyle.couponBtnImgTextCon]}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ViewStore", { ...item, ...POitem })
            }
            style={customStyle.imgCon}
          >
            <Image
              style={customStyle.cartImg}
              resizeMode="contain"
              source={{ uri: item?.store?.photoURL || POitem?.store?.photoURL }}
            />
          </TouchableOpacity>
          <View style={customStyle.postTitleAndDateCon}>
            <Text numberOfLines={2} style={customStyle.postTitle}>
              {item?.postTitle || POitem?.postTitle}
            </Text>
            <Text style={customStyle.exDate}>
              End in{" "}
              <Text style={{ fontWeight: "600" }}>
                {getExpireInAtDays(item?.expireDate || POitem?.expireDate)}
              </Text>{" "}
              days
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
          {/* button components */}
          {item?.postType === "deal" || POitem?.postType === "deal" ? (
            <DealButton
              couponCode={item?.couponCode || POitem?.couponCode}
              POitem={POitem}
              data={data}
              item={item}
            />
          ) : (
            <StoreButton
              couponCode={item?.couponCode || POitem?.couponCode}
              POitem={POitem}
              data={data}
              item={item}
            >
              <Text>Get Code</Text>
            </StoreButton>
          )}
        </TouchableOpacity>
      </View>
      {/* logical divider for sotered cart item */}
      {item?.isVerified ||
      POitem?.isVerified == true ||
      item?.postDescription ||
      POitem?.postDescription ? (
        <Divider style={customStyle.divider} />
      ) : null}
      {/* this is verification section */}
      {item?.isVerified == true || POitem?.isVerified == true ? (
        <View style={customStyle.verifiedCon}>
          <View style={customStyle.verifyIcon}>
            <Svg
              width="16"
              height="16"
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
          </View>
          <Text style={customStyle.verifyText}>Varified offer</Text>
        </View>
      ) : null}

      {/* this is description section optional */}
      {description && (
        <View style={[customStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={customStyle.verifyIcon}>
            <Svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <G clip-path="url(#clip0_106_2579)">
                <Path
                  d="M5.99992 3.33337H4.66659C4.31296 3.33337 3.97382 3.47385 3.72378 3.7239C3.47373 3.97395 3.33325 4.31309 3.33325 4.66671V12.6667C3.33325 13.0203 3.47373 13.3595 3.72378 13.6095C3.97382 13.8596 4.31296 14 4.66659 14H11.3333C11.6869 14 12.026 13.8596 12.2761 13.6095C12.5261 13.3595 12.6666 13.0203 12.6666 12.6667V4.66671C12.6666 4.31309 12.5261 3.97395 12.2761 3.7239C12.026 3.47385 11.6869 3.33337 11.3333 3.33337H9.99992"
                  stroke="black"
                  stroke-width="0.833333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M6 3.33333C6 2.97971 6.14048 2.64057 6.39052 2.39052C6.64057 2.14048 6.97971 2 7.33333 2H8.66667C9.02029 2 9.35943 2.14048 9.60948 2.39052C9.85952 2.64057 10 2.97971 10 3.33333C10 3.68696 9.85952 4.02609 9.60948 4.27614C9.35943 4.52619 9.02029 4.66667 8.66667 4.66667H7.33333C6.97971 4.66667 6.64057 4.52619 6.39052 4.27614C6.14048 4.02609 6 3.68696 6 3.33333Z"
                  stroke="black"
                  stroke-width="0.833333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M6 8H10"
                  stroke="black"
                  stroke-width="0.833333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M6 10.6666H10"
                  stroke="black"
                  stroke-width="0.833333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_106_2579">
                  <Rect width="16" height="16" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </View>
          <Text style={[customStyle.verifyText, { width: "80%" }]}>
            {item?.postDescription || POitem?.postDescription}
          </Text>
        </View>
      )}
    </View>
  );
};

export default StoreDetails;
