import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Divider from "react-native-divider";

import AppFormField from "../components/forms/AppFormField";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";
import colors from "../config/colors";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("name"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  number: Yup.number().required().label("Number"),
  designation: Yup.string().required().label("Designation"),
});
function RegisterScreen() {
  return (
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
      <AppForm
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          number: "",
          designation: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="default"
          icon={false}
          name="name"
          placeholder="Enter Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="default"
          icon={false}
          name="username"
          placeholder="Enter Username"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="email-address"
          icon={false}
          name="email"
          placeholder="Enter Email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={false}
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          icon={false}
          name="number"
          placeholder="Enter Number"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="default"
          icon={false}
          name="designation"
          placeholder="Enter Designation"
        />

        <SubmitButton title="Register" color={colors.primaryV1} width="80%" />
      </AppForm>
    </View>
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
