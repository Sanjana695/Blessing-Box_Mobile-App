import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/forms/ErrorMessage";
import APICallHandler from "../components/APICallHandler";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("email"),
  message: Yup.string().required().label("message"),
});

function ContactUs() {
  const postQuery = (values) => {
    // console.log(values);
    APICallHandler("contact", JSON.stringify(values), "POST", null, null)
      .then((res) => {
        // console.log("res of contact is", res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/contactus.png")}
        alt="contactus.png"
        style={styles.contactPic}
        resizeMode="cover"
      />
      <AppText style={styles.heading}>We would love to hear from you</AppText>

      <Formik
        initialValues={{ email: "", message: "" }}
        onSubmit={postQuery}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboradType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              icon={false}
              placeholder="Enter Email"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              multiline={true}
              autoCapitalize="none"
              autoCorrect={false}
              numberOfLines={10}
              keyboradType="default"
              onChangeText={handleChange("message")}
              onBlur={() => setFieldTouched("message")}
              icon={false}
              placeholder="Enter Message Here"
            />
            <ErrorMessage error={errors.message} visible={touched.message} />

            <AppButton
              title="Submit"
              color={colors.primaryV1}
              width="80%"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
export default ContactUs;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  contactPic: {
    width: 200,
    height: 150,
    alignSelf: "center",
  },
  heading: {
    fontSize: 20,
    color: colors.primaryV2,
    alignSelf: "center",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryV2,
    borderTopColor: colors.primaryV2,
    borderTopWidth: 2,
  },
});
