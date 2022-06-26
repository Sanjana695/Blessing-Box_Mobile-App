import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ChooseCategory from "./ChooseCategory";

function HomeScreen() {
  return (
    <>
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
    </>
  );
}
const styles = StyleSheet.create({
  homeContainer: {
    alignItems: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "90%",
  },
  text: {
    color: colors.black,
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 230,
    // textAlign: "flex-end",
    position: "absolute",
    left: 10,
  },

  spanColor: {
    color: colors.primaryV2,
    fontWeight: "bold",
  },
});
export default HomeScreen;
