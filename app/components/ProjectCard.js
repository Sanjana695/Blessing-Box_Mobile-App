import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import * as Progress from "react-native-progress";

import AppButton from "./AppButton";

function ProjectCard({ title, targetAmount, percent, collected }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.detailsContainer}>
          <AppText style={styles.projectName} numberOfLines={1}>
            {title}
          </AppText>

          <View style={styles.targetProgress}>
            <AppText style={styles.targetAmount} numberOfLines={2}>
              Target Amount: {targetAmount}
            </AppText>

            <View style={styles.subContainer}>
              <Progress.Bar
                progress={percent}
                width={100}
                height={19}
                color={colors.primaryV2}
                borderWidth={1}
                borderRadius={20}
              />
              <AppText style={styles.status}>{collected}</AppText>
            </View>
          </View>
          <View style={styles.button}>
            <AppButton title="Donate" color={colors.primaryV2} width="50%" />
          </View>
        </View>
      </View>
    </View>
  );
}
export default ProjectCard;

const styles = StyleSheet.create({
  cardContainer: {
    // flexDirection: "row",
    padding: 10,
  },
  card: {
    borderRadius: 25,
    backgroundColor: colors.primaryV1,
    // overflow: "hidden",
    // height: "75%",
    width: "100%",
    // marginBottom: 4,
    // justifyContent: "space-between",
  },

  detailsContainer: {
    padding: 7,
  },
  targetAmount: {
    color: colors.white,
    // backgroundColor:colors.primaryV2,
    // height:30,
    // textAlign:"center",
    // borderRadius: 20,
    fontSize: 15,
    fontWeight: "bold",
  },
  projectName: {
    color: colors.primaryV2,
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center",
    // marginBottom: 7,
  },

  subContainer: {
    flexDirection: "row",
    // marginTop: 10,
    justifyContent: "space-around",
  },
  status: {
    color: colors.white,
    left: 5,
  },
  targetProgress: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
  },
  button: {
    flexDirection: "row-reverse",
  },
});
