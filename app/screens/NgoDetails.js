import React, { useState, useEffect } from "react";
import { StatusBar, StyleSheet, View, ScrollView } from "react-native";
import apiRequest from "../components/APICallHandler";

import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import AppText from "../components/AppText";
import NgoInfo from "./NgoInfo";

import { setProjectsInfo } from "../redux/projects/action";

import Divider from "react-native-divider";

function NgoDetails() {
  const [ngoInfo, setNgoInfo] = useState({});
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state);

  useEffect(() => {
    const { ngoDetailReducer, detailsReducer } = reduxData;
    // console.log(detailsReducer);
    // console.log(ngoDetailReducer);

    const serviceType = ngoDetailReducer.ngoData.serviceType.toLowerCase();
    // console.log(serviceType);

    const ngo = detailsReducer[serviceType].filter(
      (ngo) => ngo.id == ngoDetailReducer.ngoData.id
    );

    // console.log("ngo Info", ngo[0].id);

    const filteredNgo = ngo;
    setNgoInfo(() => ngo[0]);
    // console.log(ngo);
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
    marginBottom: 10,
    // lineHeight: "200%",
  },
});
export default NgoDetails;
