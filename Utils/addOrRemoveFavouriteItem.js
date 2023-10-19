import AsyncStorage from "@react-native-async-storage/async-storage";

export const addOrRemoveFavouriteStore = async (item) => {
  const existFavorite = JSON.parse(await AsyncStorage.getItem("favorite"));
  const { stores, ...rest } = existFavorite;
  const isStoreExist = stores.findIndex((storeId) => storeId === item?._id);
  if (isStoreExist < 0) {
    stores.push(item?._id);
  } else {
    stores.splice(isStoreExist, 1);
  }
  // AsyncStorage.setItem("favorite", JSON.stringify({ stores: [], posts: [] }));
  AsyncStorage.setItem("favorite", JSON.stringify({ stores, ...rest }));
};

// ==================favourite post ===========
export const addOrRemoveFavouritePost = async (item) => {
  const existFavorite = JSON.parse(await AsyncStorage.getItem("favorite"));
  const { posts, ...rest } = existFavorite;
  const isStoreExist = posts.findIndex((storeId) => storeId === item?._id);
  if (isStoreExist < 0) {
    posts.push(item?._id);
  } else {
    posts.splice(isStoreExist, 1);
  }
  AsyncStorage.setItem("favorite", JSON.stringify({ posts, ...rest }));
};
