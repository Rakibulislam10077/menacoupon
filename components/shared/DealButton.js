import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useReabuildCount } from "../../hooks/AllHooks";
import { useNavigation } from "@react-navigation/native";

const dealButton = ({ data, item, POitem }) => {
  const navigation = useNavigation();
  const { getRevealedCount } = useReabuildCount();
  const handleButton = () => {
    getRevealedCount(data?._id || POitem?._id || item?._id);
    navigation.navigate("HomeCouponItem", { ...data, ...POitem, ...item });
  };

  return (
    <TouchableOpacity style={styles.buttonCon} onPress={() => handleButton()}>
      <Text style={styles.buttonText}>Buy It</Text>
    </TouchableOpacity>
  );
};

export default dealButton;

const styles = StyleSheet.create({
  buttonCon: {
    backgroundColor: "#283d27",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});
