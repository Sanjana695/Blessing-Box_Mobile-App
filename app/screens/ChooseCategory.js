import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from "react-native";
import AppText from "../components/AppText";
import Card from "../components/Card";
import colors from "../config/colors";

function ChooseCategory({ category }) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.heading}>
          Choose, where you want to donate
        </AppText>

        <TouchableOpacity
          onPress={() => navigation.navigate("DisplayNGOs", { category })}
        >
          <Card
            title="Orphanage"
            subTitle="1000 Rupees Donated"
            image={require("../assets/orphanage1.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DisplayNGOs", { category })}
        >
          <Card
            title="Food"
            subTitle="1000 Rupees Donated"
            image={require("../assets/food1.png")}
            flexDirection="row-reverse"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("DisplayNGOs", { category })}
        >
          <Card
            title="Education"
            subTitle="1000 Rupees Donated"
            image={require("../assets/education1.png")}
          />
        </TouchableOpacity>
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
    height: "35%",
    top: 25,
  },
});
export default ChooseCategory;
