import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AppText from "../components/AppText";
import NgoInfo from "./NgoInfo";

import Divider from "react-native-divider";

function NgoDetails() {
  const [ngoInfo, setNgoInfo] = useState({});
  const reduxData = useSelector((state) => state);

  useEffect(() => {
    const { ngoDetailReducer, detailsReducer } = reduxData;
    console.log(detailsReducer);
    console.log(ngoDetailReducer);

    const serviceType = ngoDetailReducer.ngoData.serviceType.toLowerCase();
    console.log(serviceType);

    const ngo = detailsReducer[serviceType].filter(
      (ngo) => ngo.id == ngoDetailReducer.ngoData.id
    );

    console.log("ngo Info", ngo[0]);

    const filteredNgo = ngo;
    setNgoInfo(() => ngo[0]);
    console.log(ngo);
  }, []);

  const [title, setTitle] = useState("Chippa NGO");
  return (
    <>
      <ScrollView>
        <AppText style={styles.heading}>{title}</AppText>
        <NgoInfo />

        {/* /////////details/////////////// */}
        <View style={styles.ngoDetailsCont}>
          <Divider orientation="center">
            <AppText style={styles.subheadings}>About Us</AppText>{" "}
          </Divider>
          <AppText style={styles.subtext}>{ngoInfo.about_us}</AppText>

          <Divider orientation="center">
            <AppText style={styles.subheadings}>Our Services</AppText>
          </Divider>
          <AppText style={styles.subtext}>{ngoInfo.services}</AppText>
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
