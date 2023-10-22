import { Dimensions, StyleSheet } from "react-native";
import { width } from "../../Utils/CustomWidthAndHeight";
const miniDeviceWidth = Dimensions.get("window").width;
export const customeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  iconAndTextCon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    flex: 1.3,
  },
  locationIcon: {
    marginBottom: 5,
  },
  textCon: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    opacity: 0.5,
    textAlign: "center",
  },
  countryCon: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 13,
    columnGap: 15,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flex: 2,
    width: width,
    maxWidth: 500,
  },
  countryView: {
    borderWidth: 1,
    height: miniDeviceWidth < 360 ? 70 : 110,
    width: miniDeviceWidth < 360 ? 70 : 110,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  countryImg: {
    width: "50%",
    height: 25,
    marginBottom: 8,
  },
  countryName: {
    fontSize: 16,
    color: "rgba(0,0,0,0.8)",
  },
  btnCon: {
    flex: 0.5,
  },
  useAppBtn: {
    height: 50,
    width: width * 0.8,
    maxWidth: 500,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
    color: "#57467A",
  },
  loginBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: "50%",
  },
  // googleBtn: {
  //     flexDirection: 'row',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginTop: 20,
  //     height: '50%'
  // },
  // googleBtnText: {
  //     fontSize: 16,
  //     color: 'rgba(0,0,0,0.8)',
  //     marginLeft: 20
  // }
});
