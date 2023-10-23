import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useReabuildCount } from "../../hooks/AllHooks";
import { useNavigation } from "@react-navigation/native";

const StoreButton = ({
  children,
  handlePresentModalPress,
  couponCode,
  data,
  item,
  POitem,
  setIsBottomSheetOpen,
}) => {
  const navigation = useNavigation();
  const [clickedButton, setClickedButton] = useState(false);
  const { getRevealedCount } = useReabuildCount();
  const handleButton = () => {
    // setIsBottomSheetOpen(data || POitem || item);
    setClickedButton(true);
    // handlePresentModalPress();
    getRevealedCount(data?._id || POitem?._id || item?._id);
    navigation.navigate("HomeCouponItem", { ...data, ...POitem, ...item });
  };

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => handleButton()}
    >
      {!clickedButton ? (
        <View style={[styles.topLayer]}>
          <Text style={styles.topLayerText}>{children}</Text>
        </View>
      ) : (
        <View style={styles.hiddenLayer}>
          <Text style={styles.hiddenText}>{couponCode}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default StoreButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  topLayer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#283D27",
    height: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  topLayerText: {
    color: "#fff",
  },
  hiddenLayer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 25,
    borderStyle: "dashed",
    borderColor: "#283D27",
    borderWidth: 1,
    borderRadius: 25,
    height: 37,
  },
  hiddenText: {
    fontWeight: "bold",
  },
});
