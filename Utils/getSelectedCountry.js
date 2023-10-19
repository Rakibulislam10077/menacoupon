import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSelectedCountry = (setchooseTheCountry) => {
  AsyncStorage.getItem("couponCountry").then((value) => {
    if (value === null) {
      // AsyncStorage.setItem("Ccountry", "true");
      AsyncStorage.setItem("Ccountry", AsyncStorage.getItem("couponCountry"));
      setchooseTheCountry(true);
    } else {
      setchooseTheCountry(value);
    }
  });
  // AsyncStorage.getItem("Ccountry").then((value) => {
  //   if (value === null) {
  //     AsyncStorage.setItem("Ccountry", "true");
  //     setchooseTheCountry(true);
  //   } else {
  //     setchooseTheCountry(value);
  //   }
  // });
};
