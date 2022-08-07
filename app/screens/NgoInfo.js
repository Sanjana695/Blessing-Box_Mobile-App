import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import Divider from "react-native-divider";
import { useSelector } from "react-redux";

function NgoInfo() {
  // const [ngoInfo, setNgoInfo] = useState({});
  const reduxData = useSelector((state) => state);

  const { ngoDetailReducer, detailsReducer } = reduxData;
  console.log(ngoDetailReducer);
  console.log(detailsReducer);

  const serviceType = ngoDetailReducer.ngoData.serviceType.toLowerCase();
  console.log(serviceType);

  const ngos = detailsReducer[serviceType].filter(
    (ngo) => ngo.ngo.id == ngoDetailReducer.ngoData.id
  );

  return (
    <View style={styles.ngodetailscont}>
      <Image source={{ uri: ngos[0].image }} style={styles.ngoimage} />

      {/* ///////////////NGO INFORMATION//////////////// */}
      <Divider orientation="center">
        <AppText style={styles.ngoInfo}>NGO Information</AppText>
      </Divider>
      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Founded</AppText>
        <AppText>{ngos[0].ngo.year}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Service Areas</AppText>
        <AppText> {ngos[0].ngo.serviceArea}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Email</AppText>
        <AppText>{ngos[0].ngo.ngoEmail} </AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Contact</AppText>
        <AppText>{ngos[0].ngo.contact}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Main Branch</AppText>
        <AppText> {ngos[0].ngo.address}</AppText>
      </View>

      {/* //////////////////FOUNDER INFORMATION/////////////////////// */}

      <Divider orientation="center">
        <AppText style={styles.ngoInfo}>Founder Information</AppText>
      </Divider>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Founder</AppText>
        <AppText>{ngos[0].ngo.founderName} </AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Contact</AppText>
        <AppText>{ngos[0].ngo.founderContact}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Email</AppText>
        <AppText>{ngos[0].ngo.ngoEmail}</AppText>
      </View>
    </View>
  );
}

//////////////////////////////////CSS CODE//////////////////////////////////
const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  ngodetailscont: {
    borderWidth: 2,
    top: 10,
  },
  ngoInfo: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  ngoimage: {
    width: 130,
    height: 100,
    alignSelf: "center",
    top: 5,
  },
  ngoinfoheadings: {
    fontWeight: "bold",
  },
});
export default NgoInfo;
