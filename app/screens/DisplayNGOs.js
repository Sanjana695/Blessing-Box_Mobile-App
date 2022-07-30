import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, StatusBar, View, TouchableOpacity } from "react-native";
import Card from "../components/Card";

function DisplayNGOs() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("NGOsDetails")}>
        <Card
          title="Chippa"
          subTitle={false}
          image={require("../assets/chippa.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("NGOsDetails")}>
        <Card
          title="Chippa"
          subTitle={false}
          image={require("../assets/chippa.png")}
          flexDirection="row-reverse"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("NGOsDetails")}>
        <Card
          title="Chippa"
          subTitle={false}
          image={require("../assets/chippa.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
export default DisplayNGOs;
