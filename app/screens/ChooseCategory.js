import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";
function ChooseCategory() {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.heading}>
          Choose, where you want to donate
        </AppText>
        <Card
          title="Orphanage"
          subTitle="1000 Rupees Donated"
          image={require("../assets/orphanage1.png")}
        />

        <Card
          title="Food"
          subTitle="1000 Rupees Donated"
          image={require("../assets/food1.png")}
          flexDirection="row-reverse"
        />

        <Card
          title="Education"
          subTitle="1000 Rupees Donated"
          image={require("../assets/education1.png")}
        />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  heading: {
    color: colors.primaryV2,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    height: "40%",
    top: 25,
  },
});
export default ChooseCategory;
