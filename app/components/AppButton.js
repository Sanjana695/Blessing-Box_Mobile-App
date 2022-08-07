import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color = "primaryV1", width = "50%", onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color, width: width }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryV1,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    width: "80%",
    marginTop: 15,
  },
  text: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
