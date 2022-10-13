import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "../layout/TabNavigator";
import { Provider } from "react-redux";
import store from "../store";

import DrawerNavigation from "./DrawerNavigation";
import RegisterScreen from "../../screens/RegisterScreen";
import LoginScreen from "../../screens/LoginScreen";
import DisplayNGOs from "../../screens/DisplayNGOs";
import NGOProjects from "../../screens/NGOProjects";
import ContactUs from "../../screens/ContactUs";
import PaymentSystem from "../../screens/PaymentSystem";

import { StripeProvider } from "@stripe/stripe-react-native";

function StackNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51LWfS4FvT289HIDPDiBH6hB8wWkpM99z6HszmKD3boMygwRCrWlJUFmgiCWQSpdOlXcNL14FRXeZiAxXukXlYGAH00A1hk3MHY">
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

          <Stack.Screen name="PaymentSystem" component={PaymentSystem} />
        </Stack.Navigator>
      </StripeProvider>
    </Provider>
  );
}

const MainNavigator = () => {
  return <StackNavigation />;
};
export default MainNavigator;
