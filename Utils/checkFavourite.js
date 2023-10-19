import AsyncStorage from "@react-native-async-storage/async-storage";

const checkIsFavourite = async (id, type) => {
  const favourite = JSON.parse(await AsyncStorage.getItem("favorite"));
  const isExist = favourite?.[type]?.find((savedId) => savedId === id);

  return !!isExist;
};

export default checkIsFavourite;
