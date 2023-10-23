import { Dimensions, StyleSheet } from "react-native";
import { width } from "../../Utils/CustomWidthAndHeight";
const storeCartWidth = Dimensions.get("window").width;
export const customStyle = StyleSheet.create({
  storeDetailsCard: {
    flex: 1,
    backgroundColor: "#fff",
    width: width * 0.9,
    shadowColor: "rgba(0,0,0,0.6)",
    elevation: 15,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
    position: "relative",
  },
  imgCon: {
    shadowColor: "rgba(0,0,0,0.5)",
    elevation: 15,
    width: 70,
    height: 70,
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
    width: "70%",
    height: "70%",
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
    fontSize: 14,
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
