import { SafeAreaView, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import {
  // mainURL,
  // useFavouriteFromLocalStorage,
  useFavouriteItemsFromApi,
  // useFavouriteStore,
} from "../../hooks/AllHooks";
import { InsideStore_and_favouriteStore } from "../insideStore/InsideStore_and_favouriteStore";
// import { FavoriteStoreContext } from "../../App";
import { screenHeight } from "../../Utils/CustomWidthAndHeight";

const FavoriteStore = () => {
  // const [favouriteDatas, setFavouriteDatas] = useState([]);
  // const { favourites, setRefetch } = useFavouriteFromLocalStorage("stores");
  const { favouriteDatas } = useFavouriteItemsFromApi();
  // const show = async () => console.log("await", favouriteDatas);
  // show();

  //   const { favouriteData, error, setRefetch } = useContext(FavoriteStoreContext);
  return (
    <SafeAreaView style={{ flex: 1, height: screenHeight / 1.4 }}>
      <ScrollView>
        <View
          style={{ flexDirection: "row", flexWrap: "wrap", paddingBottom: 200 }}
        >
          {favouriteDatas?.map((item) => (
            <InsideStore_and_favouriteStore key={item?._id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FavoriteStore;
