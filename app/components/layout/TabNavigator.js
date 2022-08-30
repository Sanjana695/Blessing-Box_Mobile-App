import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NgoDetails from "../../screens/NgoDetails";
import NGOProjects from "../../screens/NGOProjects";
import ExpenditureReport from "../../screens/ExpenditureReport";
import ProjectDesc from "../../screens/ProjectDesc";
import ImagePath from "../constants/ImagePath";
import Color from "../../config/colors";
import { Text, StyleSheet, Image } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <>
      <Tab.Navigator
        useLegacyImplementation={true}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Color.primaryV2,
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={NgoDetails}
          options={{
            // tabBarLabel: ({}) => <Text style={styles.tabItem}>Home</Text>,

            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={ImagePath.homeIcon}
                  style={{ tintColor: focused ? Color.primaryV2 : "gray" }}
                />
                // <MaterialCommunityIcons
                //   name="home"
                //   // color={Color.primaryV2}
                //   style={{ tintColor: focused ? "blue" : "gray" }}
                //   size={20}
                // />
              );
            },
          }}
        />
        <Tab.Screen
          name="Projects"
          component={NGOProjects}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={ImagePath.projectIcon}
                  style={{ tintColor: focused ? Color.primaryV2 : "gray" }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Expenditure Report"
          component={ExpenditureReport}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={ImagePath.reportIcon}
                  style={{ tintColor: focused ? Color.primaryV2 : "gray" }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}
export default TabNavigator;

const styles = StyleSheet.create({
  tabItem: {
    // color: Color.primaryV2,
    fontWeight: "bold",
  },
});
