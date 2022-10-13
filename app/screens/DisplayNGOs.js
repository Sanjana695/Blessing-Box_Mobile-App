import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
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
      <ScrollView>
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
              {/* *********CREATE NGOS DISPLAY CARDS LIST******* */}
              <View style={styles.card}>
                <AppText style={styles.title}>{ngo.ngo.name}</AppText>
                <View style={styles.detailsContainer}>
                  <Image style={styles.image} source={{ uri: ngo.image }} />
                  <View style={styles.information}>
                    <AppText style={styles.content}>{ngo.ngo.ngoEmail}</AppText>
                    <AppText style={styles.content}>{ngo.ngo.contact}</AppText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.primaryV1,
    margin: 7,
    // height: "45%",
    // width: "100%",
  },
  content: {
    color: colors.white,
    marginVertical: 5,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  image: {
    width: 120,
    height: 80,
    marginVertical: 5,
    borderRadius: 20,
  },
  information: {
    padding: 7,
  },
  heading: {
    color: colors.primaryV2,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  title: {
    alignSelf: "center",
    color: colors.white,
    fontWeight: "bold",
    fontSize: 17,
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryV2,
    marginTop: 4,
    marginBottom: 4,
  },
});
export default DisplayNGOs;
