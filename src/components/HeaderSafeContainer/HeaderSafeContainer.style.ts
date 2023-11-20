import { Platform, StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#017387",
    padding: 4,
  },
});
