import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, Alert } from "react-native";
import Divider from "react-native-divider";
import ErrorMessage from "../components/forms/ErrorMessage";
import AppButton from "../components/AppButton";
import APICallHandler from "../components/APICallHandler";
import colors from "../config/colors";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import AppTextInput from "../components/AppTextInput";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  contact: Yup.number().required().label("Contact"),
  designation: Yup.string().required().label("Designation"),
  address: Yup.string().required().label("Address"),
});
function RegisterScreen() {
  const navigation = useNavigation();

  const PostDonor = (values) => {
    console.log("data posted", values);
    APICallHandler("users", JSON.stringify(values), "POST", JSON, null).then(
      (res) => {
        // console.log("some", res);
        Alert.alert(
          "Registered successfully! \n Check your email for account varification."
        );
        navigation.navigate("login");
        if (res.user === 200) {
          console.log("in api", res);
          Alert(
            "Registered successfully! \n Check your email for account varification."
          );
        }
      }
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Divider orientation="center">
          <Text style={styles.signup}>Sign Up</Text>
        </Divider>
        <Image
          source={require("../assets/registration.png")}
          alt="registration.png"
          style={styles.registerPic}
          resizeMode="cover"
        />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            contact: "",
            designation: "",
            address: "",
          }}
          onSubmit={PostDonor}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboradType="default"
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                icon={false}
                placeholder="Enter Name"
              />
              <ErrorMessage error={errors.name} visible={touched.name} />

              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboradType="email-address"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                textContentType="emailAddress"
                icon={false}
                placeholder="Enter Email"
              />
              <ErrorMessage error={errors.email} visible={touched.email} />

              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon={false}
                placeholder="Enter Password"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                textContentType="password"
                secureTextEntry
              />
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                icon={false}
                onChangeText={handleChange("contact")}
                onBlur={() => setFieldTouched("contact")}
                placeholder="Enter Number"
              />
              <ErrorMessage error={errors.contact} visible={touched.contact} />
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboradType="default"
                onChangeText={handleChange("designation")}
                onBlur={() => setFieldTouched("designation")}
                icon={false}
                placeholder="Enter Designation"
              />
              <ErrorMessage
                error={errors.designation}
                visible={touched.designation}
              />
              <AppTextInput
                multiline={true}
                autoCapitalize="none"
                autoCorrect={false}
                keyboradType="default"
                onChangeText={handleChange("address")}
                onBlur={() => setFieldTouched("address")}
                icon={false}
                placeholder="Enter Address"
              />
              <ErrorMessage error={errors.address} visible={touched.address} />
              <AppButton
                title="Register"
                color={colors.primaryV1}
                width="80%"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 30,
  },
  signup: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primaryV2,
  },
  registerPic: {
    width: 200,
    height: 150,
    // alignItems: "center",
    // justifyContent: "center",
    alignSelf: "center",
  },
});
export default RegisterScreen;
