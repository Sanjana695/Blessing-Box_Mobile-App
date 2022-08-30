import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import AppText from "./AppText";
import Color from "../config/colors";

function ProgressBar() {
  const [collected, setCollected] = useState("50");
  const [target, setTarget] = useState("900");

  const value = (collected / target) * 100;
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={value}
        width={100}
        height={19}
        color={Color.primaryV2}
        borderWidth={1}
        borderRadius={20}
      />
      <AppText style={styles.status}>{parseInt(value * 100) + "%"}</AppText>
    </View>
  );
}

export default ProgressBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  status: {
    color: Color.white,
    left: 5,
  },
});
