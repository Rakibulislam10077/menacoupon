import { Dimensions, StyleSheet } from "react-native";
const storeCartWidth = Dimensions.get("window").width;
export const customStyle_for_insideStore = StyleSheet.create({
  store: {
    width: storeCartWidth < 400 ? 120 : 180,
    height: 190,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.8)",
    padding: 20,
    borderRadius: 12,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  imgContainer: {
    width: "100%",
    height: "40%",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  storeImg: {
    width: "55%",
    height: "100%",
    borderRadius: 10,
  },
  storeEmptyHeart: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  storeName: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
  },
});
