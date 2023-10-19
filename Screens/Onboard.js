import { StyleSheet, Text, View, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Onboard = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const { screenHeight } = Dimensions.get("screen");

  const DotComponent = ({ selected }) => {
    return (
      <View style={selected ? styles.selectedDot : styles.defaultDot}></View>
    );
  };

  const handleDone = () => {
    navigation.navigate("ChooseCountry");
  };

  return (
    <SafeAreaView
      source={require("../assets/images/onBoardBackground.png")}
      style={{ flex: 1 }}
    >
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
                  width: width * 0.9,
                  height: height * 0.4,
                }}
              >
                <LottieView
                  source={require("../assets/images/Animation - 1697267474179.json")}
                  autoPlay
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
                  width: width * 0.9,
                  height: width,
                }}
              >
                <LottieView
                  source={require("../assets/images/Animation - 1697268948508.json")}
                  autoPlay
                  loop
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
                  width: width * 0.9,
                  height: height * 0.4,
                }}
              >
                <LottieView
                  source={require("../assets/images/Animation - 1697268731752.json")}
                  loop
                  autoPlay
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
