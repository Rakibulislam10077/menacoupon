import { Dimensions, StyleSheet } from "react-native";
export const customStyle_for_insideStore = StyleSheet.create({
  store: {
    // width: (storeCartWidth >= 420 && 186) || (storeCartWidth < 400 ? 168 : 180),
    width: "48%",
    height: 190,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.3)",
    padding: 20,
    borderRadius: 12,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 15,
  },
  imgContainer: {
    width: "60%",
    height: "30%",
    alignSelf: "center",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    resizeMode: "contain",
  },
  storeImg: {
    width: "80%",
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
