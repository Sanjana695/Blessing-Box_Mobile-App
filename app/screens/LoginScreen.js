import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import colors from "../config/colors";
import Divider from "react-native-divider";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import APICallHandler from "../components/APICallHandler";
import { useDispatch } from "react-redux";
import { isLogin, setUserInfo } from "../redux/donor/action";
import AppText from "../components/AppText";

function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [data, setData] = useState([]);

  const verifyUser = () => {
    const values = { email, password };
    // console.log(values);
    APICallHandler("user", JSON.stringify(values), "POST", JSON, null)
      .then((res) => {
        console.log(res);
        setData(res);
        navigation.navigate("Home2");

        if (res.email == email) {
          const token = AsyncStorage.setItem("token", res.token);
          console.log("token", token);
          //dispatch state whether user is logged in or not
          dispatch(isLogin());
          console.log("is login", isLogin());

          //store user details into redux
          dispatch(setUserInfo(res.user));

          //navigate to home screen
          // navigation.navigate("Home2");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require("../assets/logo.png")}
          alt="logo.png"
          style={styles.logo}
          resizeMode="cover"
        />

        <Divider orientation="center">
          <Text style={styles.login}>Login</Text>
        </Divider>

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboradType="email-address"
          onChangeText={setEmail}
          textContentType="emailAddress"
          icon="email"
          placeholder="Enter Email"
        />

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          onChangeText={setpassword}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppButton
          title="Login"
          color={colors.primaryV1}
          width="80%"
          onPress={verifyUser}
        />
        <AppText
          style={styles.bottomText}
          onPress={() => navigation.navigate("Sign up")}
        >
          Not Registered? Click Here for Registration!
        </AppText>

        {data == "This email is not registered" ||
        data == "Either Username or password is wrong" ? (
          <AppText style={styles.error}>
            Either Username or Password is Wrong!
          </AppText>
        ) : (
          <AppText></AppText>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  error: {
    alignSelf: "center",
    color: "red",
    fontWeight: "bold",
    marginTop: 15,
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
  bottomText: {
    alignSelf: "center",
    color: colors.primaryV2,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "bold",
  },
});
export default LoginScreen;
