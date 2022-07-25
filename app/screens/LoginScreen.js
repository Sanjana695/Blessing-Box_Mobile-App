import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../config/colors";

import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});
function LoginScreen() {
  // var {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        alt="logo.png"
        style={styles.logo}
        resizeMode="cover"
      />

      <Text style={styles.login}>Login</Text>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="email-address"
          icon="email"
          name="email"
          placeholder="Enter Email"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="Login" color={colors.primaryV1} width="80%" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  login: {
    fontSize: 40,
    alignSelf: "center",
    color: colors.primaryV1,
  },
  logo: {
    width: 500,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen;
