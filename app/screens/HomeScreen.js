import React from "react";
import { StyleSheet, ImageBackground, View, StatusBar } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ChooseCategory from "./ChooseCategory";

function HomeScreen() {
  return (
    <View style={styles.homecontainer}>
      <ImageBackground
        blurRadius={0}
        style={styles.background}
        source={require("../assets/Charity1.gif")}
      />
      <AppText style={styles.text}>
        Donate for the <AppText style={styles.spanColor}>HUNGRY!</AppText>
        {"\n"}
        They need Us! They need You!
      </AppText>
      <ChooseCategory />
    </View>
  );
}
const styles = StyleSheet.create({
  homecontainer: {
    height: "40%",
    paddingTop: StatusBar.currentHeight,
  },
  background: {
    flex: 2,
    width: "100%",
  },
  text: {
    color: colors.black,
    fontSize: 17,
    fontWeight: "bold",
    top: "45%",
    position: "absolute",
    left: 10,
  },

  spanColor: {
    color: colors.primaryV2,
    fontWeight: "bold",
  },
});
export default HomeScreen;
