import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import ErrorMessage from "../components/forms/ErrorMessage";

import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(8).label("Password"),
});
function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="default"
          icon="account"
          name="username"
          placeholder="Enter Username"
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
        <SubmitButton title="Login" color={colors.primaryV1} width="100%" />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  login: {
    fontSize: 40,
    alignSelf: "center",
    marginTop: 50,
    color: colors.primaryV1,
  },
});
export default LoginScreen;
