import { StyleSheet } from "react-native";

export const customStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingLeft: 20,
  },
  notification_text: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 12,
  },
  ammount_notification_text: {
    fontSize: 18,
    opacity: 0.5,
    paddingLeft: 60,
    marginTop: 10,
    marginBottom: 18,
  },
  defaultItem: {
    backgroundColor: "rgba(237, 242, 251, 1)",
    marginBottom: 10,
    minHeight: 66,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  focusedItem: {
    backgroundColor: "#fff",
    marginBottom: 10,
    minHeight: 66,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.2)",
    elevation: 35,
    paddingVertical: 2,
  },
  textAndimgCon: {
    flexDirection: "row",
    flex: 7,
  },
  ImgCon: {
    flex: 1.3,
  },
  Img: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
  },
  TextCon: {
    flex: 4,
  },
  timeCon: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
