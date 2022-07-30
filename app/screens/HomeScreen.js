import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  StatusBar,
  Image,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ChooseCategory from "./ChooseCategory";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
// import RadialGradient from "react-native-radial-gradient";

function HomeScreen() {
  return (
    <View style={styles.homecontainer}>
      <LinearGradient
        colors={["rgb(42, 5, 143)", "rgba(60, 35, 131,0.8)", "rgba(0,0,0,0.5)"]}
        style={styles.linearbody}
      >
        <ImageBackground
          source={require("../assets/bg.jpg")}
          alt="bg.png"
          style={styles.bgPic}
        />
        <Image
          blurRadius={0}
          style={styles.background}
          source={require("../assets/homescreen.png")}
        />
        <AppText style={styles.text}>
          Giving a <AppText style={styles.spanColor}>LITTLE</AppText> is better
          than not giving at ALL!
        </AppText>
      </LinearGradient>

      <ChooseCategory />
    </View>
  );
}
const styles = StyleSheet.create({
  homecontainer: {
    height: "65%",
    // paddingTop: StatusBar.currentHeight,
  },
  background: {
    // flex: 1,
    width: "60%",
    height: "60%",
    alignSelf: "center",
    position: "absolute",
  },
  text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
    top: "80%",
    position: "absolute",
    left: 10,
  },

  spanColor: {
    color: colors.primaryV2,
    fontWeight: "bold",
  },
  linearbody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgPic: {
    flex: 1,
    position: "relative",
  },
});
export default HomeScreen;
