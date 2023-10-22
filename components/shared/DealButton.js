import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useReabuildCount } from "../../hooks/AllHooks";

const dealButton = ({
  handlePresentModalPress,
  data,
  item,
  POitem,
  setIsBottomSheetOpen,
}) => {
  const { getRevealedCount } = useReabuildCount();
  const handleButton = () => {
    setIsBottomSheetOpen(data || POitem || item);
    handlePresentModalPress();
    getRevealedCount(data?._id || POitem?._id || item?._id);
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
