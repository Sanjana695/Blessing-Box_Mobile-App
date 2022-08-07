import React, { useState } from "react";
import { StyleSheet, View, Linking, Alert, StatusBar } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const url1 = "http://samples.leanpub.com/thereactnativebook-sample.pdf";

function ExpenditureReport() {
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Do not how to open this ${url}`);
    }
  };
  return (
    <View style={styles.container}>
      <AppButton
        title="Open URL"
        color={colors.primaryV1}
        width="60%"
        onPress={() => {
          openUrl(url1);
        }}
      />
    </View>
  );
}
export default ExpenditureReport;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});
