import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Svg, Path, G, Defs, ClipPath } from "react-native-svg";
import { Avatar, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../App";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
  const navigation = useNavigation();
  // const { userInfo, setRefetch } = useUserInfo() // user info hook from allHooks component
  const { userInfo, setRefetch } = useContext(UserContext);
  const [countryPhotoURL, setCountryPhotoURL] = useState("");
  const countrys = [
    { id: 1, name: "Qatar", image: require("../assets/images/qatar.png") },
    { id: 2, name: "Oman", image: require("../assets/images/oman.png") },
    { id: 3, name: "KSA", image: require("../assets/images/arabia.png") },
    { id: 4, name: "Egypt", image: require("../assets/images/egypt.png") },
    { id: 5, name: "UAE", image: require("../assets/images/emirates.png") },
    { id: 6, name: "Kuwait", image: require("../assets/images/kuwait.png") },
    { id: 7, name: "Bahrain", image: require("../assets/images/bahrain.png") },
  ];

  const deleteToken = async () => {
    const remove_token = await AsyncStorage.removeItem("accessToken");
    setRefetch((prev) => prev + 1);
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
  }, []);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
              marginTop: 50,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
                color: "#445975",
              }}
            >
              MY {"\n"}Account
            </Text>
            <TouchableOpacity
              style={{ width: 40, height: 25 }}
              onPress={() => navigation.navigate("ChooseCountry")}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={countryPhotoURL}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 50,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 35,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M12 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V12.5"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M16 19H22"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M19 16V22"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M9 13C9 13.7956 9.31607 14.5587 9.87868 15.1213C10.4413 15.6839 11.2044 16 12 16C12.7956 16 13.5587 15.6839 14.1213 15.1213C14.6839 14.5587 15 13.7956 15 13C15 12.2044 14.6839 11.4413 14.1213 10.8787C13.5587 10.3161 12.7956 10 12 10C11.2044 10 10.4413 10.3161 9.87868 10.8787C9.31607 11.4413 9 12.2044 9 13Z"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </TouchableOpacity>
            {/* user image */}
            <View style={styles.ImgConTopLayer}>
              <View style={styles.ImgConInsideLayer}>
                {userInfo?.photoURL ? (
                  <Image
                    style={{ width: "100%", height: "100%", borderRadius: 40 }}
                    resizeMode="contain"
                    source={{ uri: userInfo?.photoURL }}
                  />
                ) : (
                  <Avatar.Text
                    style={{ width: "100%", height: "100%", borderRadius: 50 }}
                    label={userInfo?.name.slice(0, 1)}
                  />
                )}
              </View>
            </View>
            <TouchableOpacity
              onPress={() => deleteToken()}
              style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  d="M7 12H21M21 12L18 9M21 12L18 15"
                  stroke="black"
                  stroke-opacity="0.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
              flexDirection: "column",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 22, opacity: 0.8, marginBottom: 10 }}>
              {userInfo?.name}
            </Text>
            <Text style={{ fontSize: 16, opacity: 0.5 }}>
              {userInfo?.email}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Favourite")}
              activeOpacity={0.5}
              style={styles.accountSubCon}
            >
              <View style={{ marginRight: 23 }}>
                <Svg
                  width="30"
                  height="30"
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
              </View>
              <Text style={styles.text}>Favorite</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("MyProfile")}
              activeOpacity={0.5}
              style={styles.accountSubCon}
            >
              <View style={{ marginRight: 23 }}>
                <Svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"
                    fill="black"
                    fill-opacity="0.6"
                  />
                </Svg>
              </View>
              <Text style={styles.text}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.accountSubCon}>
              <View style={{ marginRight: 23 }}>
                <Svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    d="M19.875 6.27008C20.575 6.66808 21.005 7.41308 21 8.21808V15.5021C21 16.3111 20.557 17.0571 19.842 17.4501L13.092 21.7201C12.7574 21.9038 12.3818 22.0001 12 22.0001C11.6182 22.0001 11.2426 21.9038 10.908 21.7201L4.158 17.4501C3.80817 17.2589 3.51612 16.9772 3.31241 16.6346C3.1087 16.2919 3.0008 15.9007 3 15.5021V8.21708C3 7.40808 3.443 6.66308 4.158 6.27008L10.908 2.29008C11.2525 2.10011 11.6396 2.00049 12.033 2.00049C12.4264 2.00049 12.8135 2.10011 13.158 2.29008L19.908 6.27008H19.875Z"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M12 16V16.01"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M12 13C12.4498 13.0014 12.8868 12.8511 13.2407 12.5734C13.5945 12.2958 13.8444 11.907 13.95 11.4698C14.0557 11.0327 14.0109 10.5726 13.8229 10.1641C13.6349 9.75549 13.3147 9.42219 12.914 9.21801C12.5162 9.01422 12.0611 8.95103 11.6228 9.03873C11.1845 9.12642 10.7888 9.35984 10.5 9.70101"
                    stroke="black"
                    stroke-opacity="0.6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </View>
              <Text style={styles.text}>FAQ</Text>
            </TouchableOpacity>
          </View>
          <Divider
            style={{ width: "90%", alignSelf: "center", marginBottom: 30 }}
          />
          <View style={styles.social}>
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
          </View>
        </View>
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
    marginBottom: 30,
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
