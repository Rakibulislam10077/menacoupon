import {
  Text,
  View,
  TouchableOpacity,
  // Image
} from "react-native";
import React from "react";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-paper";
import { customStyle } from "./style";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  useAllNotification,
  //   useUpdateNotifacation,
} from "../../hooks/AllHooks";
import { screenHeight } from "../../Utils/CustomWidthAndHeight";

const Notifications = () => {
  const navigation = useNavigation();
  const {
    notification,
    // setRefetch
  } = useAllNotification();
  //   const { updateNotificationStatusById } = useUpdateNotifacation();

  //   const callNotification = (item) => {
  //     updateNotificationStatusById(item?.moreAboutPost?._id);
  //     setRefetch((prev) => prev + 1);
  //     navigation.navigate("ViewStore", { ...item });
  //   };

  return (
    <SafeAreaView style={customStyle.mainContainer}>
      <View>
        <View style={customStyle.headingContainer}>
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
          <Text style={customStyle.notification_text}>Notification</Text>
        </View>
        <Text style={customStyle.ammount_notification_text}>
          You have{" "}
          <Text
            style={{
              fontWeight: "900",
              color: "red",
              fontSize: 19,
            }}
          >
            {notification?.length}
          </Text>{" "}
          Notification Today
        </Text>
        <Divider style={{ width: "90%", alignSelf: "center" }} />
      </View>
      <View
        style={{
          height: screenHeight * 0.9,
          paddingBottom: 10,
          backgroundColor: "#fff",
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontSize: 14,
              opacity: 0.4,
              marginTop: 20,
              marginBottom: 12,
              marginLeft: 20,
            }}
          >
            Today
          </Text>
          <View style={{ paddingBottom: 200 }}>
            {notification?.map(() =>
              // item
              {
                return (
                  <></>
                  // <ScrollView>
                  //     <TouchableOpacity
                  //         onPress={
                  //             () => callNotification(item)
                  //         }
                  //         activeOpacity={.4}
                  //         style={item.status === 'readed'
                  //             ?
                  //             customStyle.focusedItem
                  //             :
                  //             customStyle.defaultItem}
                  //         key={item?.moreAboutPost?.store?._id}
                  //     >
                  //         <View style={customStyle.textAndimgCon}>
                  //             <View style={customStyle.ImgCon}>
                  //                 <Image style={customStyle.Img} source={{ uri: item?.moreAboutPost?.store?.photoURL }} />
                  //             </View>
                  //             <View style={customStyle.TextCon}>
                  //                 <Text styl={customStyle.postTitle}>
                  //                     {item?.moreAboutPost?.postTitle}
                  //                 </Text>
                  //                 <Text>{item?.moreAboutPost?.store?.storeName} valid offers for you.</Text>
                  //             </View>
                  //         </View>
                  //         <View style={customStyle.timeCon}>
                  //             <Text>hello</Text>
                  //         </View>
                  //     </TouchableOpacity>
                  // </ScrollView>
                );
              }
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
