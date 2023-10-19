import { StyleSheet } from "react-native";
import { width } from "../../Utils/CustomWidthAndHeight";
export const customStyle = StyleSheet.create({
  searchBox: {
    paddingLeft: 22,
    paddingRight: 15,
    height: 50,
    width: width * 0.9,
    alignSelf: "center",
    borderRadius: 40,
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.5)",
    elevation: 20,
  },
  FLcon: {
    height: 200,
    width: 200,
    backgroundColor: "green",
  },
  searchTopStrCon: {
    width: 80,
    alignItems: "center",
    paddingTop: 10,
  },
  itemCon: {
    marginBottom: 20,
  },
  resultTextCon: {
    paddingHorizontal: 20,
  },
  result: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
  },
  searchTopImgCon: {
    width: 55,
    height: 55,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.3)",
    elevation: 25,
    borderRadius: 50,
    marginBottom: 15,
  },
  searchTopText: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    textAlign: "center",
  },
});
