import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, StatusBar, View, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { setNGOData } from "../redux/selectNgoDetail/action";
import AppText from "../components/AppText";
import colors from "../config/colors";
// import { BottomNavigation } from "react-native-paper";

function DisplayNGOs() {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const { category } = route.params;
  // console.log("INNNN category", category);

  const ngos = useSelector((state) => state.detailsReducer[category]);
  // console.log("In details ", ngos);

  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>{category} NGOS</AppText>
      {ngos.map((ngo) => {
        return (
          <TouchableOpacity
            key={ngo.id}
            onPress={() => {
              const data = {
                id: ngo.ngo.id,
                serviceType: ngo.ngo.serviceType,
              };

              dispatch(setNGOData(data));

              navigation.navigate("NGOs Details");
            }}
          >
            <Card
              title={ngo.ngo.name}
              subTitle={ngo.ngo.year}
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
  heading: {
    color: colors.primaryV2,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default DisplayNGOs;
