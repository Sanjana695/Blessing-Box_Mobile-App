import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Linking,
  Alert,
  StatusBar,
  ScrollView,
} from "react-native";
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
          // console.log("proof projects", res.projects);
          setProof(() => res.projects);
        }
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>Expenditure Report</AppText>
      <ScrollView>
        {proofs.map((proof) => {
          return (
            // {/* *******add project data******** */}
            <View style={styles.reportContainer} key={proof.id}>
              <View style={styles.card}>
                <AppText style={styles.title}>{proof.title}</AppText>

                <View style={styles.amountContainer}>
                  <AppText style={styles.collectedAmount}>
                    {" "}
                    Target Amount:
                  </AppText>
                  <AppText style={styles.amount}>{proof.target}</AppText>
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
            </View>
          );
        })}
      </ScrollView>
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
  heading: {
    color: colors.primaryV2,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryV1,
  },
  title: {
    alignSelf: "center",
    marginTop: 10,
    color: colors.primaryV2,
    fontSize: 20,
    fontWeight: "bold",
  },
  reportContainer: {
    padding: 9,
  },
});
