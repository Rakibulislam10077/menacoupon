import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetStoreById, useGetStoreByStoreName } from "../../hooks/AllHooks";
import { ScrollView } from "react-native-gesture-handler";

const HowToUse = ({ item: store }) => {
  // const [store, setStore] = useState({});
  // const { getStoreById } = useGetStoreById();
  // const { getStoreByStoreName } = useGetStoreByStoreName();
  // useEffect(() => {
  //   const handleGetStoreById = async () => {
  //     const fetchedStore = item?.store?.storeName
  //       ? await getStoreByStoreName(item?.store?.storeName)
  //       : await getStoreById(item?._id);
  //     setStore(fetchedStore);
  //   };
  //   handleGetStoreById();
  // }, []);
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#fff",
          paddingTop: 20,
          padding: 10,
          marginVertical: 10,
          marginBottom: 100,
        }}
      >
        {store?.data?.howToUse?.map((element) => {
          return element?.map((d) => {
            if (d.type === "h3") {
              return (
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "rgba(0, 0, 0, 0.7)",
                    marginBottom: 30,
                    marginLeft: 5,
                  }}
                  key={d.id}
                >
                  {d.content}
                </Text>
              );
            } else if (d.type === "p") {
              return (
                <Text
                  style={{
                    fontSize: 16,
                    color: "rgba(0, 0, 0, 0.4)",
                    marginBottom: 30,
                    marginLeft: 5,
                  }}
                  key={d.id}
                >
                  {d.content}
                </Text>
              );
            } else if (d.type === "img") {
              return (
                <Image
                  style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 18,
                    marginBottom: 30,
                  }}
                  key={d.id}
                  source={{ uri: d?.photoURL }}
                />
              );
            }
          });
        })}
      </View>
    </ScrollView>
  );
};

export default HowToUse;
