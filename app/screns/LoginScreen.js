import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppInputText from "../components/AppInputText";
import colors from "../config/colors";

function LoginScreen() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={styles.text}>LOGIN</Text>
      </View>

      <AppInputText
        autoCapitalize="none"
        autoCorrect={false}
        keyboradType="default"
        icon="email"
        onChangeText={(text) => setUsername(text)}
        placeholder="Enter Username"
      />
      {/* <AppInputText
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      /> */}
      {/* <AppButton
        title="Login"
        onPress={() => console.log(username, password)}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  //   logo: {
  //     width: 80,
  //     height: 70,
  //     alignSelf: "center",
  //     marginTop: 50,
  //   },
  logoContainer: {
    alignItems: "center",
  },
  text: {
    top: 50,
    fontSize: 30,
    color: colors.priamryV1,
  },
});
export default LoginScreen;
