import { StyleSheet } from "react-native";
import { width } from "../../Utils/CustomWidthAndHeight";

export const customStyle = StyleSheet.create({
  storeDetailsCard: {
    flex: 1,
    backgroundColor: "#fff",
    minWidth: width * 0.9,
    shadowColor: "rgba(0,0,0,0.3)",
    elevation: 25,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
    position: "relative",
  },
  imgCon: {
    shadowColor: "rgba(0,0,0,0.5)",
    elevation: 15,
    flex: 1,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginRight: "8%",
  },
  couponBtnImgTextCon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartImg: {
    width: "80%",
    height: "80%",
    borderRadius: 5,
  },
  postTitleAndDateCon: {
    flex: 2,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  exDate: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
  },
  divider: {
    height: 1,
    color: "#000",
    opacity: 0.3,
    marginTop: 15,
  },
  verifiedCon: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  verifyIcon: {
    marginRight: 10,
  },
  verifyText: {
    color: "#000",
    opacity: 0.7,
    fontSize: 12,
  },
});
