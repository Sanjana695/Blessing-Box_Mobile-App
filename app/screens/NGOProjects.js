import React from "react";
import Divider from "react-native-divider";
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import AppText from "../components/AppText";

function NGOProjects() {
  return (
    <View style={styles.projectsContainer}>
      <Divider orientation="center">
        <AppText style={styles.subheadings}>Our Projects</AppText>
      </Divider>
      <AppText style={styles.subtext}>
        CHHIPA WELFARE, a non-profit welfare organization in Pakistan, imbued
        with a noble mission, having sincere love and affection for the humanity
        and a strong commitment to serve the COMMON PEOPLE without
        discrimination of any caste, creed or colour under all circumstances,
        where frequent road accidents, sudden events and emergencies daily
        occur. CHHIPA WELFARE, a non-profit welfare organization in Pakistan,
        imbued with a noble mission, having sincere love and affection for the
        humanity and a strong commitment to serve the COMMON PEOPLE without
        discrimination of any caste, creed or colour under all circumstances,
        where frequent road accidents, sudden events and emergencies daily
        occur.
      </AppText>
    </View>
  );
}
export default NGOProjects;

const styles = StyleSheet.create({
  projectsContainer: {
    paddingTop: StatusBar.currentHeight,
  },
  subheadings: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtext: {
    // justifyContent: "flex-start",
    textAlign: "justify",
    padding: 12,
    // lineHeight: "200%",
  },
});
