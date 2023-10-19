import {
  TouchableOpacity,
  Image,
  View,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <TouchableOpacity style={{ marginBottom: 10, paddingHorizontal: 20 }}>
      <Image
        style={{ width: "100%", borderRadius: 10, height: 200 }}
        source={{ uri: item?.photoURL }}
      />
    </TouchableOpacity>
  );
};

export default CarouselItem;
