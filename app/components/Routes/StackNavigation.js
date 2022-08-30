import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../layout/TabNavigator";
import { Provider } from "react-redux";
import store from "../store";
import colors from "../../config/colors";
import { View, StatusBar, StyleSheet } from "react-native";
import DrawerNavigation from "./DrawerNavigation";
import RegisterScreen from "../../screens/RegisterScreen";
import LoginScreen from "../../screens/LoginScreen";
import DisplayNGOs from "../../screens/DisplayNGOs";
import NGOProjects from "../../screens/NGOProjects";
import ContactUs from "../../screens/ContactUs";

function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={DrawerNavigation} />
        <Stack.Screen name="sign-in" component={RegisterScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="DisplayNGOs" component={DisplayNGOs} />
        <Stack.Screen name="NGODetails" component={TabNavigator} />
        <Stack.Screen name="NGOProjects" component={NGOProjects} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
      </Stack.Navigator>
    </Provider>
  );
}

const MainNavigator = () => {
  return <StackNavigation />;
};
export default MainNavigator;
