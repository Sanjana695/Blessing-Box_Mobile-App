import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "../components/AppText";
import Divider from "react-native-divider";

function NgoInfo() {
  const [founded, setFounded] = useState(1998);
  const [services, setServices] = useState(["Education", "Orphanage", "Food"]);
  const [email, setEmail] = useState("chippa@gmail.com");
  const [contact, setContact] = useState("03227865342");
  const [address, setAddress] = useState("Sukkur");

  const [founder, setFounder] = useState("Abdul Sattar Edhi");
  const [founderContact, setFounderContact] = useState("03229087654");
  const [founderEmail, setFounderEmail] = useState("sadiashah059@gmail.com");
  return (
    <View style={styles.ngodetailscont}>
      <Image source={require("../assets/chippa.png")} style={styles.ngoimage} />

      {/* ///////////NGO INFORMATION//////////// */}
      <Divider orientation="center">
        <AppText style={styles.ngoInfo}>NGO Information</AppText>
      </Divider>
      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>founded</AppText>
        <AppText>{founded}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Services</AppText>
        <AppText>{`${services}, `}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Email</AppText>
        <AppText>{email}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Contact</AppText>
        <AppText>{contact}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Main Branch</AppText>
        <AppText>{address}</AppText>
      </View>

      {/* ///////////FOUNDER INFORMATION//////////// */}

      <Divider orientation="center">
        <AppText style={styles.ngoInfo}>Founder Information</AppText>
      </Divider>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Founder</AppText>
        <AppText>{founder}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Contact</AppText>
        <AppText>{founderContact}</AppText>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.ngoinfoheadings}>Email</AppText>
        <AppText>{founderEmail}</AppText>
      </View>
    </View>
  );
}
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
