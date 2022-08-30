import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import AppText from "../components/AppText";
import Color from "../config/colors";
import * as Progress from "react-native-progress";
import Slider from "@react-native-community/slider";
import AppButton from "../components/AppButton";
import NumericInput from "react-native-numeric-input";
import { useNavigation, useRoute } from "@react-navigation/native";

function ProjectCard() {
  const [range, setRange] = useState("50");

  ////use Route
  const route = useRoute();
  //****get itm from NGO Projects component for project cards data*****
  const { itm } = route.params;
  console.log("project descriptionnn", itm.title);

  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText style={styles.heading}>{itm.title}</AppText>
        <Image
          // source={{ uri: itm.imageurl }}
          source={require("../assets/pinkRibbon.jpg")}
          alt="pinkRibbon.jpg"
          style={styles.image}
        />
        <View style={styles.progressContainer}>
          <AppText>Target Amount:{itm.target}</AppText>
          <Progress.Bar
            progress={0.5}
            width={155}
            height={17}
            color={Color.primaryV2}
            borderWidth={1}
            borderRadius={20}
          />
          <AppText>{"50%"}</AppText>
        </View>
        <AppText style={styles.description}>{itm.description}</AppText>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={itm.target}
            minimumTrackTintColor={Color.primaryV2}
            maximumTrackTintColor="#000"
            thumbTintColor={Color.primaryV2}
            value={typeof range === "number" ? range : 0}
            onValueChange={(value) => setRange(parseInt(value))}
          />
          <NumericInput
            // value={typeof range === "number" ? range : 0}
            minValue={0}
            maxValue={itm.target}
            onChange={(value) => setRange(value)}
            // onLimitReached={(isMax, msg) => console.log(isMax, msg)}
            totalWidth={100}
            totalHeight={40}
            iconSize={25}
            // step={1.5}
            valueType="real"
            rounded
            textColor="#B0228C"
            iconStyle={{ color: Color.primaryV2 }}
            type="up-down"
            upDownButtonsBackgroundColor={Color.primaryV1}
          />
        </View>
        <View style={styles.button}>
          <AppButton title="Donate" color={Color.primaryV1} />
        </View>
      </View>
    </ScrollView>
  );
}
export default ProjectCard;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row-reverse",
    padding: 5,
  },
  container: {
    marginTop: 10,
  },
  description: {
    padding: 10,
    fontSize: 15,
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
    height: 150,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  slider: {
    width: 250,
    height: 40,
    padding: 10,
  },
});
