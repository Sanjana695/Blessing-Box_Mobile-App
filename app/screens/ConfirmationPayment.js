import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import { useNavigation, useRoute } from "@react-navigation/native";
import APICallHandler from "../components/APICallHandler";

function ConfirmationPayment() {
  const route = useRoute();

  const { id, donation } = route.params;
  console.log(id, "ID", donation, "RANGE");

  const body = {
    donation: route.params.donation,
    date: "2018-06-22 07:07:54",
    projectId: route.params.id,
    userId: 1,
  };

  useEffect(() => {
    console.log("spm");
    if (donation) {
      APICallHandler("adddonation", JSON.stringify(body), "POST", JSON, null)
        .then((res) => {
          console.log("res of donation is", res);
          if (res.donation) {
            APICallHandler(`getdonation/${id}`, null, "GET", null, null)
              .then((res) => {
                console.log("res of donation is by id", res);
              })
              .catch((err) => {
                console.log("res of donation is message", err.message);
              });
          }
        })
        .catch((err) => {
          console.log("res of donation is error", err.message);
        });
    }
  }, [donation]);

  return (
    <View style={styles.container}>
      <AppText style={styles.text_container}>
        Congratulations! You earned 100's of Blessings just in {donation}
        Rupees!
      </AppText>
    </View>
  );
}
export default ConfirmationPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text_container: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
});
