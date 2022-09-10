import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import * as Progress from "react-native-progress";

function ProjectCard({
  title,
  targetAmount,
  percent,
  collected,
  account_id = "acct_1LRtpvBT2aR8PHTn",
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <AppText style={styles.projectName} numberOfLines={1}>
          {title}
        </AppText>

        {/* ********Show target amount of particular project********** */}
        <AppText style={styles.targetAmount} numberOfLines={2}>
          Target Amount: {targetAmount}
        </AppText>

        {/* **********Show Donation Recieved in progress Bar********** */}
        <View style={styles.progressContainer}>
          <AppText style={styles.donation}>Donation Recieved: </AppText>
          <View style={styles.subContainer}>
            <Progress.Bar
              progress={percent}
              width={150}
              height={19}
              color={colors.primaryV2}
              borderWidth={1}
              borderRadius={20}
            />
            <AppText style={styles.status}>{collected}</AppText>
          </View>
        </View>
        <AppText style={styles.donationText}>Click Here For Donation..</AppText>
      </View>
    </View>
  );
}
export default ProjectCard;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 9,
  },
  card: {
    borderRadius: 25,
    backgroundColor: colors.primaryV1,
    padding: 9,
    width: "100%",
  },

  donation: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  donationText: {
    color: colors.primaryV2,
    marginTop: 5,
    fontSize: 15,

    alignSelf: "center",
  },
  projectName: {
    color: colors.primaryV2,
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center",
    marginBottom: 5,
  },
  progressContainer: {
    marginTop: 5,
    flexDirection: "row",
  },
  subContainer: {
    flexDirection: "row",
  },
  status: {
    color: colors.white,
    left: 5,
  },
  targetAmount: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },

  targetProgress: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-around",
  },
});
