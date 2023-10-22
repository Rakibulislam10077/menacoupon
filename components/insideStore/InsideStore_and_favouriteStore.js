import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { G, Path, Svg } from "react-native-svg";
import { Divider } from "react-native-paper";
import { customStyle_for_insideStore } from "./style";
import { useNavigation } from "@react-navigation/native";
import React from "react";
// import { useFvStoreData } from "../../hooks/AllHooks";
// import { FavoriteStoreContext } from "../../App";
// import { addOrRemoveFavouriteStore } from "../../Utils/addOrRemoveFavouriteItem";
// import checkIsFavourite from "../../Utils/checkFavourite";
// import { Dimensions } from "react-native";
import { Alert } from "react-native";

export const InsideStore_and_favouriteStore = ({
  item,
  isFavourite = false,
  fvitem,
}) => {
  const navigation = useNavigation();
  // const [isFavourite, setIsFavourite] = useState(false);
  // const { width, height } = Dimensions.get("window");
  // const { fvStoreData } = useFvStoreData();
  // const { favouriteData } = useContext(FavoriteStoreContext);

  // add and remove
  const addOrRemoveFav = async () => {
    Alert.alert("coming soon");
    // await fvStoreData(item);
    // await addOrRemoveFavouriteStore(item);
    // setRefetch((prev) => prev + 1);
  };
  // console.log(item, "================================================");

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ViewStore", {
          ...item,
          ...fvitem,
          ...isFavourite,
        })
      }
      style={customStyle_for_insideStore.store}
    >
      <View style={customStyle_for_insideStore.imgContainer}>
        <Image
          style={customStyle_for_insideStore.storeImg}
          resizeMode="contain"
          source={{ uri: item?.photoURL || fvitem?.photoURL }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          addOrRemoveFav(item || fvitem);
        }}
        style={customStyle_for_insideStore.storeEmptyHeart}
      >
        {/* {isFavourite ? (
          // {isFavourite || fvitem ? (
          // if store in favourite list then love icon will be
          <Svg
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <G clip-path="url(#clip0_106_1859)">
              <Path
                d="M5.81583 2.56176C6.55338 2.43609 7.30973 2.47754 8.02913 2.68307C8.74853 2.88859 9.41263 3.25294 9.97249 3.74926L10.0033 3.77676L10.0317 3.75176C10.566 3.28284 11.1942 2.93325 11.8743 2.72633C12.5544 2.5194 13.2709 2.45989 13.9758 2.55176L14.1808 2.58176C15.0694 2.73518 15.9 3.12605 16.5845 3.71298C17.2691 4.29991 17.7822 5.06105 18.0695 5.91579C18.3568 6.77053 18.4076 7.68706 18.2166 8.56832C18.0255 9.44958 17.5997 10.2628 16.9842 10.9218L16.8342 11.0759L16.7942 11.1101L10.5858 17.2593C10.4426 17.4011 10.2527 17.4861 10.0516 17.4987C9.85038 17.5112 9.65146 17.4505 9.49166 17.3276L9.41333 17.2593L3.16916 11.0743C2.50768 10.4306 2.03724 9.61649 1.80996 8.72198C1.58268 7.82747 1.60741 6.88751 1.88143 6.00619C2.15544 5.12487 2.66804 4.33659 3.36246 3.72865C4.05688 3.12071 4.90602 2.71684 5.81583 2.56176Z"
                fill="#283D27"
              />
            </G>
          </Svg>
        ) : (
          <Svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M19.5 12.5719L12 19.9999L4.5 12.5719C4.0053 12.0905 3.61564 11.5119 3.35554 10.8726C3.09545 10.2332 2.97056 9.54688 2.98873 8.85687C3.00691 8.16685 3.16776 7.48807 3.46115 6.86327C3.75455 6.23847 4.17413 5.68119 4.69348 5.22651C5.21283 4.77184 5.8207 4.42962 6.47881 4.22141C7.13691 4.01321 7.831 3.94352 8.51736 4.01673C9.20373 4.08995 9.8675 4.30449 10.4669 4.64684C11.0662 4.98919 11.5882 5.45193 12 6.00593C12.4135 5.45595 12.9361 4.99725 13.5351 4.65854C14.1341 4.31982 14.7965 4.10838 15.4809 4.03745C16.1654 3.96652 16.8571 4.03763 17.5128 4.24632C18.1685 4.45502 18.774 4.79681 19.2915 5.2503C19.8091 5.70379 20.2274 6.25922 20.5204 6.88182C20.8134 7.50443 20.9747 8.18082 20.9943 8.86864C21.0139 9.55647 20.8913 10.2409 20.6341 10.8792C20.377 11.5174 19.9909 12.0958 19.5 12.5779"
              stroke="black"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        )} */}
      </TouchableOpacity>
      <Text style={customStyle_for_insideStore.storeName}>
        {item?.storeName?.slice(0, 15) || fvitem?.storeName?.slice(0, 15)}.
      </Text>
      <Divider style={{ height: 1, opacity: 0.7, marginTop: 15 }} />
      <Text
        style={{
          fontSize: 14,
          color: "rgba(0,0,0,0.4)",
          alignSelf: "center",
          marginTop: 12,
        }}
      >
        {item?.totalPosts || fvitem?.totalPosts} offers available
      </Text>
    </TouchableOpacity>
  );
};
