import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.primaryV1}
          style={styles.icon}
        />
      )}
      <TextInput {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.primaryV1,
    borderRadius: 25,
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    padding: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
