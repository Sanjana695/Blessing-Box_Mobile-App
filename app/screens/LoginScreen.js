import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../config/colors";
import Divider from "react-native-divider";
import * as Yup from "yup";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import ErrorMessage from "../components/forms/ErrorMessage";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import APICallHandler from "../components/APICallHandler";
import { useSelector, useDispatch } from "react-redux";
import { isLogin, isLogout, setUserInfo } from "../redux/donor/action";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen() {
  const [valid, setValid] = useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    // const getLogin = (values) => {
    //   console.log("data posted", values);
    //   APICallHandler("user", JSON.stringify(values), "POST", JSON, null).then(
    //     (res) => {
    //       // console.log("some", res);
    //       navigation.navigate("Home");
    //       if (res.status === 200) {
    //         console.log("in api", res);
    //         Alert.alert(
    //           "Registered successfully! \n Check your email for account varification."
    //         );
    //       }
    //     }
    //   );
    // };
    // getLogin();
  });
  const verifyDonor = () => {};
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        alt="logo.png"
        style={styles.logo}
        resizeMode="cover"
      />

      <Divider orientation="center">
        <Text style={styles.login}>Login</Text>
      </Divider>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={verifyDonor}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboradType="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              textContentType="emailAddress"
              icon="email"
              placeholder="Enter Email"
            />

            <ErrorMessage error={errors.email} visible={touched.email} />

            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton
              title="Login"
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

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

  login: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primaryV2,
  },
  logo: {
    width: 200,
    height: 250,
    alignSelf: "center",
  },
});
export default LoginScreen;
