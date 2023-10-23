import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  Linking,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { Avatar, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../App";
import { useNavigation } from "@react-navigation/native";
import { useAllcoupon, useContact, useStore } from "../hooks/AllHooks";

const Account = () => {
  const navigation = useNavigation();
  // const { userInfo, setRefetch } = useUserInfo() // user info hook from allHooks component
  // const { userInfo, setRefetch } = useContext(UserContext);
  const [countryPhotoURL, setCountryPhotoURL] = useState("");
  const [refetch, setRefetch] = useState(0);
  const { number } = useContact();
  const countrys = [
    {
      id: 1,
      name: "Qatar",
      image: require("../assets/images/qatar.png"),
    },
    {
      id: 2,
      name: "Oman",
      image: require("../assets/images/oman.png"),
    },
    {
      id: 3,
      name: "Saudi Arabia",
      image: require("../assets/images/arabia.png"),
    },
    {
      id: 4,
      name: "Egypt",
      image: require("../assets/images/egypt.png"),
    },
    {
      id: 5,
      name: "United Arab Emirates",
      shortForm: "UAE",
      image: require("../assets/images/emirates.png"),
    },
    {
      id: 6,
      name: "Kuwait",
      shortForm: "Kuwait",
      image: require("../assets/images/kuwait.png"),
    },
    {
      id: 7,
      name: "Bahrain",
      shortForm: "Bahrain",
      image: require("../assets/images/bahrain.png"),
    },
  ];

  const deleteToken = async () => {
    const remove_token = await AsyncStorage.removeItem("accessToken");
    // setRefetch((prev) => prev + 1);
    return remove_token;
  };

  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("couponCountry");
      const selected_country = countrys.find(
        (country) => country.name === userCountry
      );
      setCountryPhotoURL(selected_country.image);
    };
    getCountry();
  }, [refetch]);

  // ========================reset country function =====================
  const handleCountryAsyncEvent = async () => {
    navigation.navigate("ChooseAgainCountry", { setRefetch });
  };

  return (
    // <SafeAreaView>
    //   <ScrollView showsVerticalScrollIndicator={false}>
    //     <View style={styles.container}>
    //       <View
    //         style={{
    //           flexDirection: "row",
    //           justifyContent: "space-between",
    //           paddingHorizontal: 30,
    //           marginTop: 50,
    //         }}
    //       >
    //         <Text
    //           style={{
    //             fontSize: 30,
    //             fontWeight: "700",
    //             color: "#445975",
    //           }}
    //         >
    //           MY {"\n"}Account
    //         </Text>
    //         <TouchableOpacity
    //           style={{ width: 40, height: 25 }}
    //           onPress={() => navigation.navigate("ChooseCountry")}
    //         >
    //           <Image
    //             style={{ width: "100%", height: "100%" }}
    //             source={countryPhotoURL}
    //           />
    //         </TouchableOpacity>
    //       </View>
    //       <View
    //         style={{
    //           flex: 1,
    //           paddingHorizontal: 50,
    //           flexDirection: "row",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           marginTop: 35,
    //         }}
    //       >
    //         <TouchableOpacity
    //           style={{
    //             flex: 2,
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //         >
    //           <Svg
    //             width="30"
    //             height="30"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <Path
    //               d="M12 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V12.5"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <Path
    //               d="M16 19H22"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <Path
    //               d="M19 16V22"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <Path
    //               d="M9 13C9 13.7956 9.31607 14.5587 9.87868 15.1213C10.4413 15.6839 11.2044 16 12 16C12.7956 16 13.5587 15.6839 14.1213 15.1213C14.6839 14.5587 15 13.7956 15 13C15 12.2044 14.6839 11.4413 14.1213 10.8787C13.5587 10.3161 12.7956 10 12 10C11.2044 10 10.4413 10.3161 9.87868 10.8787C9.31607 11.4413 9 12.2044 9 13Z"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </Svg>
    //         </TouchableOpacity>
    //         {/* user image */}
    //         <View style={styles.ImgConTopLayer}>
    //           <View style={styles.ImgConInsideLayer}>
    //             {userInfo?.photoURL ? (
    //               <Image
    //                 style={{ width: "100%", height: "100%", borderRadius: 40 }}
    //                 resizeMode="contain"
    //                 source={{ uri: userInfo?.photoURL }}
    //               />
    //             ) : (
    //               <Avatar.Text
    //                 style={{ width: "100%", height: "100%", borderRadius: 50 }}
    //                 label={userInfo?.name.slice(0, 1)}
    //               />
    //             )}
    //           </View>
    //         </View>
    //         <TouchableOpacity
    //           onPress={() => deleteToken()}
    //           style={{
    //             flex: 2,
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //         >
    //           <Svg
    //             width="30"
    //             height="30"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <Path
    //               d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <Path
    //               d="M7 12H21M21 12L18 9M21 12L18 15"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </Svg>
    //         </TouchableOpacity>
    //       </View>
    //       <View
    //         style={{
    //           justifyContent: "center",
    //           alignItems: "center",
    //           marginTop: 25,
    //           flexDirection: "column",
    //           marginBottom: 30,
    //         }}
    //       >
    //         <Text style={{ fontSize: 22, opacity: 0.8, marginBottom: 10 }}>
    //           {userInfo?.name}
    //         </Text>
    //         <Text style={{ fontSize: 16, opacity: 0.5 }}>
    //           {userInfo?.email}
    //         </Text>
    //       </View>
    //       <View>
    //         <TouchableOpacity
    //           onPress={() => navigation.navigate("Favourite")}
    //           activeOpacity={0.5}
    //           style={styles.accountSubCon}
    //         >
    //           <View style={{ marginRight: 23 }}>
    //             <Svg
    //               width="30"
    //               height="30"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <Path
    //                 d="M19.5 12.5719L12 19.9999L4.5 12.5719C4.0053 12.0905 3.61564 11.5119 3.35554 10.8726C3.09545 10.2332 2.97056 9.54688 2.98873 8.85687C3.00691 8.16685 3.16776 7.48807 3.46115 6.86327C3.75455 6.23847 4.17413 5.68119 4.69348 5.22651C5.21283 4.77184 5.8207 4.42962 6.47881 4.22141C7.13691 4.01321 7.831 3.94352 8.51736 4.01673C9.20373 4.08995 9.8675 4.30449 10.4669 4.64684C11.0662 4.98919 11.5882 5.45193 12 6.00593C12.4135 5.45595 12.9361 4.99725 13.5351 4.65854C14.1341 4.31982 14.7965 4.10838 15.4809 4.03745C16.1654 3.96652 16.8571 4.03763 17.5128 4.24632C18.1685 4.45502 18.774 4.79681 19.2915 5.2503C19.8091 5.70379 20.2274 6.25922 20.5204 6.88182C20.8134 7.50443 20.9747 8.18082 20.9943 8.86864C21.0139 9.55647 20.8913 10.2409 20.6341 10.8792C20.377 11.5174 19.9909 12.0958 19.5 12.5779"
    //                 stroke="black"
    //                 stroke-opacity="0.6"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </Svg>
    //           </View>
    //           <Text style={styles.text}>Favorite</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           onPress={() => navigation.navigate("MyProfile")}
    //           activeOpacity={0.5}
    //           style={styles.accountSubCon}
    //         >
    //           <View style={{ marginRight: 23 }}>
    //             <Svg
    //               width="30"
    //               height="30"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <Path
    //                 d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
    //                 fill="black"
    //                 fill-opacity="0.6"
    //               />
    //             </Svg>
    //           </View>
    //           <Text style={styles.text}>My Profile</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity activeOpacity={0.8} style={styles.accountSubCon}>
    //           <View style={{ marginRight: 23 }}>
    //             <Svg
    //               width="30"
    //               height="30"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <Path
    //                 d="M19.875 6.27008C20.575 6.66808 21.005 7.41308 21 8.21808V15.5021C21 16.3111 20.557 17.0571 19.842 17.4501L13.092 21.7201C12.7574 21.9038 12.3818 22.0001 12 22.0001C11.6182 22.0001 11.2426 21.9038 10.908 21.7201L4.158 17.4501C3.80817 17.2589 3.51612 16.9772 3.31241 16.6346C3.1087 16.2919 3.0008 15.9007 3 15.5021V8.21708C3 7.40808 3.443 6.66308 4.158 6.27008L10.908 2.29008C11.2525 2.10011 11.6396 2.00049 12.033 2.00049C12.4264 2.00049 12.8135 2.10011 13.158 2.29008L19.908 6.27008H19.875Z"
    //                 stroke="black"
    //                 stroke-opacity="0.6"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <Path
    //                 d="M12 16V16.01"
    //                 stroke="black"
    //                 stroke-opacity="0.6"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //               <Path
    //                 d="M12 13C12.4498 13.0014 12.8868 12.8511 13.2407 12.5734C13.5945 12.2958 13.8444 11.907 13.95 11.4698C14.0557 11.0327 14.0109 10.5726 13.8229 10.1641C13.6349 9.75549 13.3147 9.42219 12.914 9.21801C12.5162 9.01422 12.0611 8.95103 11.6228 9.03873C11.1845 9.12642 10.7888 9.35984 10.5 9.70101"
    //                 stroke="black"
    //                 stroke-opacity="0.6"
    //                 stroke-width="2"
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //               />
    //             </Svg>
    //           </View>
    //           <Text style={styles.text}>FAQ</Text>
    //         </TouchableOpacity>
    //       </View>
    //       <Divider
    //         style={{ width: "90%", alignSelf: "center", marginBottom: 30 }}
    //       />
    //       <View style={styles.social}>
    //         <View style={{ marginRight: 15 }}>
    //           <Svg
    //             width="40"
    //             height="41"
    //             viewBox="0 0 30 31"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <Path
    //               d="M3.75 9.25C3.75 8.58696 4.01339 7.95107 4.48223 7.48223C4.95107 7.01339 5.58696 6.75 6.25 6.75H23.75C24.413 6.75 25.0489 7.01339 25.5178 7.48223C25.9866 7.95107 26.25 8.58696 26.25 9.25V21.75C26.25 22.413 25.9866 23.0489 25.5178 23.5178C25.0489 23.9866 24.413 24.25 23.75 24.25H6.25C5.58696 24.25 4.95107 23.9866 4.48223 23.5178C4.01339 23.0489 3.75 22.413 3.75 21.75V9.25Z"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //             <Path
    //               d="M3.75 9.25L15 16.75L26.25 9.25"
    //               stroke="black"
    //               stroke-opacity="0.6"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //             />
    //           </Svg>
    //         </View>
    //         <View>
    //           <Text style={styles.talkText}>Talk to Us</Text>
    //           <Text style={styles.whatsDesc}>
    //             Need help? Chat with us by whatsapp
    //           </Text>
    //         </View>
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <ScrollView>
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
              My Account
            </Text>
          </View>
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
        <Divider style={{ marginBottom: 20 }} />
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Coming soon",
              "Insha-allah, Very soon we will launch V:1.0.1 include so many features. \n\nThank You"
            )
          }
          activeOpacity={0.5}
          style={styles.accountSubCon}
        >
          <View style={{ marginRight: 23 }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <Path
                d="M19.4993 12.5717L11.9993 19.9997L4.49932 12.5717C4.00463 12.0903 3.61497 11.5117 3.35487 10.8723C3.09478 10.2329 2.96989 9.54664 2.98806 8.85662C3.00624 8.1666 3.16709 7.48782 3.46048 6.86303C3.75388 6.23823 4.17346 5.68094 4.69281 5.22627C5.21216 4.77159 5.82003 4.42938 6.47814 4.22117C7.13624 4.01296 7.83033 3.94327 8.51669 4.01649C9.20306 4.08971 9.86682 4.30425 10.4662 4.64659C11.0656 4.98894 11.5876 5.45169 11.9993 6.00569C12.4129 5.45571 12.9355 4.99701 13.5344 4.65829C14.1334 4.31958 14.7958 4.10814 15.4803 4.03721C16.1647 3.96628 16.8564 4.03739 17.5121 4.24608C18.1678 4.45477 18.7734 4.79656 19.2909 5.25005C19.8084 5.70354 20.2268 6.25897 20.5197 6.88158C20.8127 7.50419 20.9741 8.18057 20.9936 8.8684C21.0132 9.55622 20.8906 10.2407 20.6335 10.8789C20.3763 11.5172 19.9902 12.0955 19.4993 12.5777"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <Text style={styles.text}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TermsAndCondition")}
          activeOpacity={0.5}
          style={styles.accountSubCon}
        >
          <View style={{ marginRight: 23 }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <G clip-path="url(#clip0_1983_1994)">
                <Path
                  d="M3.5 5.5L5 7L7.5 4.5"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M3.5 11.5L5 13L7.5 10.5"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M3.5 17.5L5 19L7.5 16.5"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M11 6H20"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M11 12H20"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M11 18H20"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_1983_1994">
                  <Rect width="24" height="24" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </View>
          <Text style={styles.text}>Terms & Condition</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PrivacyPolicy")}
          activeOpacity={0.5}
          style={styles.accountSubCon}
        >
          <View style={{ marginRight: 23 }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <G clip-path="url(#clip0_1983_1986)">
                <Path
                  d="M12.0008 3C14.3366 5.06658 17.3853 6.14257 20.5008 6C20.9544 7.54302 21.0932 9.16147 20.9089 10.7592C20.7247 12.3569 20.2211 13.9013 19.4282 15.3005C18.6353 16.6998 17.5692 17.9254 16.2933 18.9045C15.0173 19.8836 13.5576 20.5962 12.0008 21C10.444 20.5962 8.98429 19.8836 7.70836 18.9045C6.43242 17.9254 5.36632 16.6998 4.57341 15.3005C3.78049 13.9013 3.27694 12.3569 3.09269 10.7592C2.90843 9.16147 3.04722 7.54302 3.50081 6C6.61634 6.14257 9.66498 5.06658 12.0008 3Z"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M11 11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11Z"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M12 12V14.5"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_1983_1986">
                  <Rect width="24" height="24" fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
          </View>
          <Text style={styles.text}>Privacy Policy</Text>
        </TouchableOpacity>
        <Divider style={{ marginBottom: 20, marginTop: 10 }} />
        <TouchableOpacity
          onPress={() => Linking.openURL(`https://wa.me/${number}`)}
          style={styles.social}
        >
          <View style={{ marginRight: 15 }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="39"
              viewBox="0 0 30 31"
              fill="none"
            >
              <Path
                d="M3.75 26.7499L5.8125 21.9999C4.23458 19.76 3.52833 17.0212 3.82631 14.2975C4.12428 11.5739 5.40598 9.05257 7.43088 7.2068C9.45579 5.36103 12.0847 4.31767 14.8242 4.27252C17.5638 4.22738 20.2256 5.18356 22.3102 6.96162C24.3948 8.73967 25.7589 11.2174 26.1465 13.9297C26.534 16.6421 25.9184 19.4027 24.4151 21.6934C22.9119 23.9841 20.6243 25.6474 17.9817 26.3713C15.3392 27.0951 12.5233 26.8298 10.0625 25.6249L3.75 26.7499Z"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M11.25 13C11.25 13.1658 11.3158 13.3247 11.4331 13.4419C11.5503 13.5592 11.7092 13.625 11.875 13.625C12.0408 13.625 12.1997 13.5592 12.3169 13.4419C12.4342 13.3247 12.5 13.1658 12.5 13V11.75C12.5 11.5842 12.4342 11.4253 12.3169 11.3081C12.1997 11.1908 12.0408 11.125 11.875 11.125C11.7092 11.125 11.5503 11.1908 11.4331 11.3081C11.3158 11.4253 11.25 11.5842 11.25 11.75V13ZM11.25 13C11.25 14.6576 11.9085 16.2473 13.0806 17.4194C14.2527 18.5915 15.8424 19.25 17.5 19.25M17.5 19.25H18.75C18.9158 19.25 19.0747 19.1842 19.1919 19.0669C19.3092 18.9497 19.375 18.7908 19.375 18.625C19.375 18.4592 19.3092 18.3003 19.1919 18.1831C19.0747 18.0658 18.9158 18 18.75 18H17.5C17.3342 18 17.1753 18.0658 17.0581 18.1831C16.9408 18.3003 16.875 18.4592 16.875 18.625C16.875 18.7908 16.9408 18.9497 17.0581 19.0669C17.1753 19.1842 17.3342 19.25 17.5 19.25Z"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <View>
            <Text style={styles.talkText}>Talk to Us</Text>
            <Text style={styles.whatsDesc}>
              Need help? Chat with us by whatsapp
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:hello@menacoupon.com")}
          style={styles.social}
        >
          <View style={{ marginRight: 15 }}>
            <Svg
              width="40"
              height="41"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M3.75 9.25C3.75 8.58696 4.01339 7.95107 4.48223 7.48223C4.95107 7.01339 5.58696 6.75 6.25 6.75H23.75C24.413 6.75 25.0489 7.01339 25.5178 7.48223C25.9866 7.95107 26.25 8.58696 26.25 9.25V21.75C26.25 22.413 25.9866 23.0489 25.5178 23.5178C25.0489 23.9866 24.413 24.25 23.75 24.25H6.25C5.58696 24.25 4.95107 23.9866 4.48223 23.5178C4.01339 23.0489 3.75 22.413 3.75 21.75V9.25Z"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M3.75 9.25L15 16.75L26.25 9.25"
                stroke="black"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <View>
            <Text style={styles.talkText}>Talk to Us</Text>
            <Text style={styles.whatsDesc}>
              Need help? Chat with us by whatsapp
            </Text>
          </View>
        </TouchableOpacity>
        <Divider style={{ marginBottom: 20, marginTop: 10 }} />
        <Text
          style={{
            alignSelf: "center",
            color: "rgba(0, 0, 0, 0.40)",
            fontSize: 14,
          }}
        >
          Version: 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingBottom: 70,
  },
  accountSubCon: {
    backgroundColor: "#f8fafd",
    height: 74,
    borderRadius: 14,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 22,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    opacity: 0.6,
  },
  social: {
    flexDirection: "row",
    marginLeft: 30,
    alignItems: "center",
    marginBottom: 30,
  },
  talkText: {
    fontSize: 16,
    opacity: 0.8,
    marginBottom: 8,
  },
  whatsDesc: {
    fontSize: 14,
    opacity: 0.4,
  },
  ImgConTopLayer: {
    width: 95,
    height: 98,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "purple",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
  },
  ImgConInsideLayer: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#797979",
    position: "absolute",
    left: 3,
    top: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
