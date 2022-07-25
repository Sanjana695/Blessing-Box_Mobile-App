import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Card from "../components/Card";

function OrphanageNgos() {
  return (
    <View style={styles.container}>
      <Card
        title="Chippa"
        subTitle={false}
        image={require("../assets/chippa.png")}
      />

      <Card
        title="Chippa"
        subTitle={false}
        image={require("../assets/chippa.png")}
        flexDirection="row-reverse"
      />

      <Card
        title="Chippa"
        subTitle={false}
        image={require("../assets/chippa.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
export default OrphanageNgos;
