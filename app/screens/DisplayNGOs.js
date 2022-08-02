import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, StatusBar, View, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import { useSelector } from "react-redux";
// import { BottomNavigation } from "react-native-paper";

function DisplayNGOs() {
  const navigation = useNavigation();
  const route = useRoute();

  const { category } = route.params;
  // console.log("INNNN category", category);

  const ngos = useSelector((state) => state.detailsReducer[category]);
  console.log("In details ", ngos);

  return (
    <View style={styles.container}>
      {ngos.map((ngo) => {
        return (
          <TouchableOpacity
            key={ngo.id}
            onPress={() => navigation.navigate("NGODetails")}
          >
            <Card
              title={ngo.ngo.name}
              subTitle={false}
              image={{ uri: ngo.image }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
});
export default DisplayNGOs;
