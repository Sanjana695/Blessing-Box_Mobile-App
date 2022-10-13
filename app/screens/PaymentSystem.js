import React, { useState, useEffect } from "react";
import Divider from "react-native-divider";
import {
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Slider from "@react-native-community/slider";
import NumericInput from "react-native-numeric-input";

import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import { useNavigation, useRoute } from "@react-navigation/native";

function PaymentSystem() {
  const navigation = useNavigation();
  const route = useRoute();
  const { itm } = route.params;

  const [range, setRange] = useState("50");

  const [email, setEmail] = useState();
  const [cardDetails, setCardDetails] = useState();
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      "http://10.102.144.207:8080/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          donation: range,
        }),
      }
    );
    // console.log("payment sytem", response.amount);
    const { clientSecret, error } = await response.json();
    // console.log("payment sytem", range);

    return { clientSecret, error };
  };
  const handlePayPress = async () => {
    //1. Gather the donor billing information
    if (!cardDetails?.complete || !email || !range) {
      Alert.alert("Please Enter Complete Card Details and Email!");
      // console.log("RANGE", range);
      return;
    }
    const billingDeatils = { email: email };
    // console.log(email, "email");
    //2. fetch the intent client secret from the backend
    try {
      const { clientSecret, error } = await fetchPaymentIntentClientSecret();

      //confirm the payment
      if (error) {
        console.log("Unable to process payment");
      } else {
        const { paymentIntent, error } = await confirmPayment(clientSecret, {
          type: "Card",
          billingDetails: billingDeatils,
        });
        if (error) {
          Alert.alert(`Payment Cofirmation Error ${error.message}`);
        } else if (paymentIntent) {
          Alert.alert("Payment Successfully!");
          console.log("payment successfully", paymentIntent);
          navigation.navigate("Confirmation Message", {
            id: itm.id,
            donation: range,
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboradType="email-address"
        onChangeText={setEmail}
        textContentType="emailAddress"
        icon="email"
        placeholder="E-mail"
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{ number: "4242 4242 4242 4242" }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={(cardDetails) => setCardDetails(cardDetails)}
      />
      {/* **************Enter Donation Amount Here***************** */}
      <View style={styles.sliderContainer}>
        {/* <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={50000}
          minimumTrackTintColor={colors.primaryV2}
          maximumTrackTintColor="#000"
          thumbTintColor={colors.primaryV2}
          value={typeof range === "number" ? range : 0}
          onValueChange={(value) => setRange(parseInt(value))}
        /> */}
        <NumericInput
          // value={typeof range === "number" ? range : 0}
          minValue={0}
          maxValue={50000}
          onChange={(value) => setRange(parseInt(value))}
          // onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          totalWidth={100}
          totalHeight={40}
          iconSize={25}
          // step={1.5}
          valueType="real"
          rounded
          textColor="#B0228C"
          iconStyle={{ color: colors.primaryV2 }}
          type="up-down"
          upDownButtonsBackgroundColor={colors.primaryV1}
        />

        {/* <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="default"
          onChangeText={() => setRange(range)}
          textContentType="default"
          // icon="email"
          placeholder="amount"
          style={styles.input}
        /> */}
      </View>

      {/* *******back and donate buttons******* */}
      <View style={styles.buttons}>
        <AppButton
          title="Back"
          color={colors.primaryV1}
          width="30%"
          onPress={() => navigation.navigate("Project Description")}
        />
        <AppButton
          title="Pay"
          disabled={loading}
          width="30%"
          onPress={handlePayPress}
          color={colors.primaryV1}
        />
      </View>
    </View>
  );
}
export default PaymentSystem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 20,
  },
  card: {
    backgroundColor: colors.white,
  },
  cardContainer: {
    // borderWidth: 2,
    // borderRadius: 25,

    height: 50,
    marginVertical: 30,
  },
  buttons: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  slider: {
    width: 250,
    height: 40,
    padding: 10,
  },
});
