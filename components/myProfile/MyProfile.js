import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Linking,
  Image,
  PermissionsAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { Avatar, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { customeStyleForMyprofile } from "./style";
import { useUpdateUserInfo } from "../../hooks/AllHooks";
import { UserContext } from "../../App";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
// import ImagePicker, { openPicker } from 'react-native-image-crop-picker';

const MyProfile = () => {
  const navigation = useNavigation();
  const [editName, setEditName] = useState(true);
  const [editPNumber, setEditPNumber] = useState(true);

  const [updateName, setUpdateName] = useState("");
  const [updatePNumber, setUpdatePNumber] = useState("");

  const [profile, setProfile] = useState(null);
  const { updateInfo } = useUpdateUserInfo();
  const { userInfo, setRefetch } = useContext(UserContext);

  const handleEditName = () => {
    setEditName(false);
  };
  const handleEditNumber = () => {
    setEditPNumber(false);
  };

  const handleUpdateButton = () => {
    const payload = {};
    updateName && (payload.name = updateName);
    updatePNumber && (payload.phoneNumber = updatePNumber);
    updateInfo(payload);
    setRefetch((prev) => prev + 1);
    setEditName(true);
    setEditPNumber(true);
  };

  const deletToken = async () => {
    const DToken = await AsyncStorage.removeItem("accessToken");
    await setRefetch((prev) => prev + 1);
    return DToken;
  };

  // const requestCameraPermission = async () => {
  //     try {
  //         const granted = await PermissionsAndroid.request(
  //             PermissionsAndroid.PERMISSIONS.CAMERA,
  //             {
  //                 title: 'Cool Photo App Camera Permission',
  //                 message:
  //                     'Cool Photo App needs access to your camera ' +
  //                     'so you can take awesome pictures.',
  //                 buttonNeutral: 'Ask Me Later',
  //                 buttonNegative: 'Cancel',
  //                 buttonPositive: 'OK',
  //             },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //             console.log('You can use the camera');
  //         } else {
  //             console.log('Camera permission denied');
  //         }
  //     } catch (err) {
  //         console.warn(err);
  //     }
  // };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}
    >
      <ScrollView>
        <View style={customeStyleForMyprofile.headingCon}>
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
            </Svg>
          </TouchableOpacity>
          <Text style={customeStyleForMyprofile.heading}>My profile</Text>
        </View>
        {/* profile setup */}

        <View style={customeStyleForMyprofile.profileCon}>
          <TouchableOpacity
          // onPress={() => requestCameraPermission()}
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
          {/* profile box */}
          <TouchableOpacity style={customeStyleForMyprofile.profileBox}>
            {userInfo?.photoURL ? (
              <Image
                resizeMode="contain"
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
                source={{ uri: userInfo?.photoURL }}
              />
            ) : (
              <Avatar.Text
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
                label={userInfo?.name.slice(0, 1)}
              />
            )}
          </TouchableOpacity>
          {/* ============== */}
          <TouchableOpacity onPress={() => deletToken()}>
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
        <View style={customeStyleForMyprofile.UserDetailContainer}>
          <View style={customeStyleForMyprofile.inputFieldAndText}>
            <Text style={customeStyleForMyprofile.text}>Name</Text>

            {editName ? (
              <TouchableOpacity onPress={() => handleEditName()}>
                <Text style={customeStyleForMyprofile.userName}>
                  {userInfo?.name}
                </Text>
              </TouchableOpacity>
            ) : (
              <TextInput
                onChangeText={(n) => setUpdateName(n)}
                // value={userInfo?.name}
                style={customeStyleForMyprofile.name_number_country_field}
              />
            )}
          </View>
          <Divider
            style={
              editName
                ? customeStyleForMyprofile.divider
                : customeStyleForMyprofile.editedDivider
            }
          />
          <View style={customeStyleForMyprofile.inputFieldAndText}>
            <Text style={customeStyleForMyprofile.text}>Email</Text>
            <Text style={customeStyleForMyprofile.userName}>
              {userInfo?.email}
            </Text>
          </View>
          <Divider style={{ marginBottom: 30 }} />
          <View style={customeStyleForMyprofile.inputFieldAndText}>
            <Text style={customeStyleForMyprofile.text}>Phone Number</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={customeStyleForMyprofile.userName}>+880</Text>
              {editPNumber ? (
                <TouchableOpacity onPress={() => handleEditNumber()}>
                  <Text style={customeStyleForMyprofile.userName}>
                    {" "}
                    {userInfo?.phoneNumber}
                  </Text>
                </TouchableOpacity>
              ) : (
                <TextInput
                  onChangeText={(number) => setUpdatePNumber(number)}
                  // value={userInfo?.phoneNumber}
                  style={[
                    customeStyleForMyprofile.name_number_country_field,
                    { width: "80%", marginLeft: 12 },
                  ]}
                />
              )}
            </View>
          </View>
          <Divider
            style={
              editPNumber
                ? customeStyleForMyprofile.divider
                : customeStyleForMyprofile.editedDivider
            }
          />
          <View style={customeStyleForMyprofile.inputFieldAndText}>
            <Text style={customeStyleForMyprofile.text}>Country</Text>
            {
              <Text style={customeStyleForMyprofile.userName}>
                {userInfo?.country}
              </Text>
            }
          </View>
          <Divider />

          {!editName ? (
            <TouchableOpacity
              onPress={() => handleUpdateButton()}
              activeOpacity={0.5}
              style={customeStyleForMyprofile.saveButton}
            >
              <Text style={customeStyleForMyprofile.buttonText}>
                Save Update
              </Text>
            </TouchableOpacity>
          ) : (
            !editPNumber && (
              <TouchableOpacity
                onPress={() => handleUpdateButton()}
                activeOpacity={0.5}
                style={customeStyleForMyprofile.saveButton}
              >
                <Text style={customeStyleForMyprofile.buttonText}>
                  Save Update
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyProfile;
