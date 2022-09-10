import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import AppText from "../components/AppText";
import Color from "../config/colors";

import AppButton from "../components/AppButton";
import Divider from "react-native-divider";
import * as Progress from "react-native-progress";

import { useNavigation, useRoute } from "@react-navigation/native";

function ProjectCard() {
  const navigation = useNavigation();

  ////use Route
  const route = useRoute();
  //****get itm from NGO Projects component for project cards data*****
  const { itm, account_id } = route.params;
  console.log("project descriptionnn", itm.title);
  console.log("account_id", account_id);

  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText style={styles.heading}>{itm.title}</AppText>

        {/* *******Image of project******** */}
        <Image
          source={{ uri: itm.imageurl }}
          alt="pinkRibbon.jpg"
          style={styles.image}
        />

        {/* ***********Target Amount of Project here************ */}
        <View style={styles.targetAmount}>
          <AppText style={styles.target}>Target Amount: </AppText>
          <AppText style={styles.amount}>{itm.target}</AppText>
        </View>

        {/* **********Recieved Donation in Progress Bar***********  */}
        <View style={styles.progress}>
          <AppText style={styles.donation}>Donation Recieved--</AppText>
          <Progress.Bar
            progress={itm.amountRecieved / 100}
            width={155}
            height={17}
            color={Color.primaryV2}
            borderWidth={1}
            borderRadius={20}
          />
          <AppText>{`${itm.amountRecieved}%`}</AppText>
        </View>
        <View style={styles.border}></View>

        {/* ************Project Description************* */}
        <View style={styles.subContainer}>
          <Divider orientation="center">
            <AppText style={styles.projectDes}>Project Description</AppText>
          </Divider>
          <AppText style={styles.description}>{itm.description}</AppText>

          {/* ***************Donate and Back to projects Buttons********************** */}
          <View style={styles.buttons}>
            <AppButton
              title="Back"
              color={Color.primaryV1}
              width="30%"
              onPress={() => navigation.navigate("Projects")}
            />
            <AppButton
              title="Donate"
              color={Color.primaryV1}
              width="30%"
              onPress={() => navigation.navigate("Payment System")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default ProjectCard;

const styles = StyleSheet.create({
  amount: {
    color: Color.primaryV2,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  border: {
    borderBottomWidth: 1,
    marginTop: 10,
    borderBottomColor: Color.primaryV2,
  },
  container: {
    marginTop: 10,
  },
  description: {
    padding: 10,
    fontSize: 15,
    textAlign: "justify",
  },
  donation: {
    fontSize: 14,
    fontWeight: "bold",
    color: Color.primaryV1,
  },
  heading: {
    color: Color.primaryV1,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: Color.primaryV2,
    borderTopWidth: 2,
    borderTopColor: Color.primaryV2,
  },
  image: {
    alignSelf: "center",
    marginTop: 10,
    width: 300,
    height: 250,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  projectDes: {
    color: Color.primaryV2,

    fontSize: 16,
    fontWeight: "bold",
  },

  subContainer: {
    marginTop: 10,
  },

  target: {
    fontSize: 14,
    fontWeight: "bold",
    color: Color.primaryV1,
  },
  targetAmount: {
    marginTop: 15,
    flexDirection: "row",
    marginStart: 10,
  },
});
