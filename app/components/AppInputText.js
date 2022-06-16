import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TextInput, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppInputText({ icon, ...otherprops }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.priamryV1}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherprops} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 20,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
  },
});
export default AppInputText;
