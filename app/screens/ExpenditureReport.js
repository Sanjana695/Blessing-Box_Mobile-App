import React, { useEffect, useState } from "react";
import { StyleSheet, View, Linking, Alert, StatusBar } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import apiRequest from "../components/APICallHandler";

// const url1 = "http://samples.leanpub.com/thereactnativebook-sample.pdf";

function ExpenditureReport() {
  const [proofs, setProof] = useState([]);
  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Do not how to open this ${url}`);
    }
  };

  ////get project data and proof document by project id
  useEffect(() => {
    apiRequest("proof", null, "GET", null, null).then((res) => {
      // console.log("Expenditure Details: ", res);
      if (res.success) {
        if (res.projects) {
          console.log("proof projects", res.projects);
          setProof(() => res.projects);
        }
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      {proofs.map((proof) => {
        return (
          // {/* *******add project data******** */}
          <View style={styles.card} key={proof.id}>
            <AppText style={styles.title}>{proof.title}</AppText>

            <View style={styles.amountContainer}>
              <AppText style={styles.collectedAmount}>
                {" "}
                Collected Amount:
              </AppText>
              <AppText style={styles.amount}>{50000}</AppText>
            </View>

            {/* ********View Expenditure Report**********  */}
            <View style={styles.button}>
              <AppButton
                title="View"
                color={colors.primaryV1}
                width="30%"
                onPress={() => {
                  openUrl(proof.proof.document);
                }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}
export default ExpenditureReport;
const styles = StyleSheet.create({
  amount: {
    color: colors.primaryV2,
    marginStart: 5,
  },
  amountContainer: {
    flexDirection: "row",
  },
  button: {
    flexDirection: "row-reverse",
    padding: 5,
  },
  container: {
    padding: 10,
    // paddingTop: StatusBar.currentHeight,
  },
  card: {
    borderRadius: 25,
    borderColor: colors.primaryV1,
    width: "100%",
    backgroundColor: colors.white,
  },
  collectedAmount: {
    color: colors.primaryV1,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryV2,
  },
  title: {
    alignSelf: "center",
    marginTop: 10,
    color: colors.primaryV2,
    fontSize: 20,
    fontWeight: "bold",
  },
});
