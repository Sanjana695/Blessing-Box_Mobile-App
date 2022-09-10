import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../layout/DrawerContent";
import { View, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";
import HomeScreen from "../../screens/HomeScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import LoginScreen from "../../screens/LoginScreen";
import ContactUs from "../../screens/ContactUs";
import DisplayNGOs from "../../screens/DisplayNGOs";
import NgoDetails from "../../screens/NgoDetails";
import TabNavigator from "../layout/TabNavigator";
import ProjectDesc from "../../screens/ProjectDesc";
import PaymentSystem from "../../screens/PaymentSystem";
import { StripeProvider } from "@stripe/stripe-react-native";

function DrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51LWfS4FvT289HIDPDiBH6hB8wWkpM99z6HszmKD3boMygwRCrWlJUFmgiCWQSpdOlXcNL14FRXeZiAxXukXlYGAH00A1hk3MHY">
        <Drawer.Navigator
          useLegacyImplementation={true}
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen
            name="Home2"
            component={HomeScreen}
            options={{
              title: "Blessing Box",

              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="Display NGOs"
            component={DisplayNGOs}
            options={{
              title: "Blessing Box",
              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="Contact Us"
            component={ContactUs}
            options={{
              title: "Blessing Box",
              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="NGOs Details"
            component={TabNavigator}
            options={{
              title: "Blessing Box",
              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />

          <Drawer.Screen
            name="Project Description"
            component={ProjectDesc}
            options={{
              title: "Blessing Box",
              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />
          {
            <Drawer.Screen
              name="Payment System"
              component={PaymentSystem}
              options={{
                title: "Blessing Box",
                headerStyle: {
                  backgroundColor: colors.primarytrans,
                },
                headerTintColor: colors.white,
                headerTitleAlign: "center",
              }}
            />
          }

          <Drawer.Screen
            name="Sign up"
            component={RegisterScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Blessing Box",
              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />
          <Drawer.Screen
            name="Sign Out"
            component={HomeScreen}
            options={{
              title: "Blessing Box",
              headerStyle: {
                backgroundColor: colors.primarytrans,
              },
              headerTintColor: colors.white,
              headerTitleAlign: "center",
            }}
          />
        </Drawer.Navigator>
      </StripeProvider>
    </View>
  );
}
export default DrawerNavigation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});
