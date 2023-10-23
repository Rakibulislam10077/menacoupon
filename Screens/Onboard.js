import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Onboard = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const { screenHeight } = Dimensions.get("screen");

  const DotComponent = ({ selected }) => {
    return (
      <View style={selected ? styles.selectedDot : styles.defaultDot}></View>
    );
  };

  const handleDone = async () => {
    navigation.navigate("ChooseCountry");
    await AsyncStorage.setItem("onboarded", "1");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Onboarding
        containerStyles={{
          paddingHorizontal: 20,
        }}
        showNext={false}
        DotComponent={DotComponent}
        showSkip={false}
        bottomBarHighlight={false}
        DoneButtonComponent={(doneButton = () => {})}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View
                style={{
                  width: width,
                  height: 350,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/V1.png")}
                />
              </View>
            ),
            title: "Best Coupon",
            subtitle:
              "It is a long established fact that a reader will be distracted by the readable content ",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View
                style={{
                  width: width,
                  height: 350,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Image
                  style={{ height: 350, width: width }}
                  resizeMode="contain"
                  source={require("../assets/images/V2.png")}
                />
              </View>
            ),
            title: "Shopping",
            subtitle:
              "It is a long established fact that a reader will be distracted by the readable content ",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View
                style={{
                  width: width,
                  height: 350,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Image
                  style={{ height: 360 }}
                  resizeMode="contain"
                  source={require("../assets/images/V3.png")}
                />
              </View>
            ),
            title: "Explore & Enjoy",
            subtitle: (
              <View style={[styles.subTitleAndButtonContainer]}>
                <Text style={styles.subTitle}>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </Text>
                <TouchableOpacity
                  onPress={() => handleDone()}
                  style={[styles.getStartBtn, { width: width * 0.7 }]}
                >
                  <Text style={styles.getBtnText}>Get Start</Text>
                </TouchableOpacity>
              </View>
            ),
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  selectedDot: {
    backgroundColor: "#57467A",
    width: 24,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  defaultDot: {
    backgroundColor: "#57467A",
    width: 6,
    height: 6,
    borderRadius: 5,
    opacity: 0.2,
    marginHorizontal: 5,
  },
  subTitleAndButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    color: "#fff",
    textAlign: "center",
  },
  getStartBtn: {
    backgroundColor: "#fff",
    marginVertical: 20,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 15,
  },
  getBtnText: {
    fontSize: 20,
    color: "purple",
  },
});
