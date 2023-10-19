import { StyleSheet } from "react-native";

export const customeStyleForMyprofile = StyleSheet.create({
  headingCon: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    height: 64,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 22,
    color: "rgba(0, 0, 0, 0.6)",
  },
  profileCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 30,
  },
  profileBox: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
    marginHorizontal: 43,
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
  },
  UserDetailContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  inputFieldAndText: {
    marginLeft: 30,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.3)",
    marginBottom: 15,
  },
  userName: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.6)",
  },
  name_number_country_field: {
    height: 24,
    fontSize: 18,
    color: "#04140c",
  },
  saveButton: {
    height: 45,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#283D27",
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  divider: {
    marginBottom: 30,
  },
  editedDivider: {
    backgroundColor: "#000",
    marginBottom: 30,
  },
});
