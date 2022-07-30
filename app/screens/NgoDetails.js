import React, { useState } from "react";
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import AppText from "../components/AppText";
import NgoInfo from "./NgoInfo";

import Divider from "react-native-divider";

function NgoDetails() {
  const [title, setTitle] = useState("Chippa NGO");
  return (
    <>
      <ScrollView>
        <AppText style={styles.heading}>{title}</AppText>
        <NgoInfo />
        <View style={styles.ngoDetailsCont}>
          <Divider orientation="center">
            <AppText style={styles.subheadings}>About Us</AppText>{" "}
          </Divider>
          <AppText style={styles.subtext}>
            CHHIPA WELFARE, a non-profit welfare organization in Pakistan,
            imbued with a noble mission, having sincere love and affection for
            the humanity and a strong commitment to serve the COMMON PEOPLE
            without discrimination of any caste, creed or colour under all
            circumstances, where frequent road accidents, sudden events and
            emergencies daily occur. CHHIPA WELFARE, a non-profit welfare
            organization in Pakistan, imbued with a noble mission, having
            sincere love and affection for the humanity and a strong commitment
            to serve the COMMON PEOPLE without discrimination of any caste,
            creed or colour under all circumstances, where frequent road
            accidents, sudden events and emergencies daily occur.
          </AppText>

          <Divider orientation="center">
            <AppText style={styles.subheadings}>Our Services</AppText>
          </Divider>
          <AppText style={styles.subtext}>
            CHHIPA WELFARE, a non-profit welfare organization in Pakistan,
            imbued with a noble mission, having sincere love and affection for
            the humanity and a strong commitment to serve the COMMON PEOPLE
            without discrimination of any caste, creed or colour under all
            circumstances, where frequent road accidents, sudden events and
            emergencies daily occur. CHHIPA WELFARE, a non-profit welfare
            organization in Pakistan, imbued with a noble mission, having
            sincere love and affection for the humanity and a strong commitment
            to serve the COMMON PEOPLE without discrimination of any caste,
            creed or colour under all circumstances, where frequent road
            accidents, sudden events and emergencies daily occur.
          </AppText>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  heading: {
    paddingTop: StatusBar.currentHeight,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  ngoDetailsCont: {
    top: 20,
    // flex: 5,
  },
  subheadings: {
    fontWeight: "bold",
    fontSize: 22,
  },
  subtext: {
    // justifyContent: "flex-start",
    textAlign: "justify",
    padding: 12,
    // lineHeight: "200%",
  },
});
export default NgoDetails;
