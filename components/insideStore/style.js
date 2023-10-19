import { StyleSheet } from "react-native";

export const customStyle_for_insideStore = StyleSheet.create({
  store: {
    minWidth: 150,
    maxWidth: 215,
    height: 220,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#797979",
    elevation: 40,
    padding: 20,
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
