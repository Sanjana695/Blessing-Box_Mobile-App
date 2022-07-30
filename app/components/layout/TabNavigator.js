import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NgoDetails from "../../screens/NgoDetails";
import NGOProjects from "../../screens/NGOProjects";
import ExpenditureReport from "../../screens/ExpenditureReport";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Color from "../../config/colors";
import { Text, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <>
      <Tab.Navigator
        useLegacyImplementation={true}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={NgoDetails}
          options={{
            tabBarLabel: ({}) => <Text style={styles.tabItem}>Home</Text>,

            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="home"
                color={Color.primaryV2}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Projects"
          component={NGOProjects}
          options={{
            tabBarLabel: ({}) => <Text style={styles.tabItem}>Projects</Text>,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="menu-open"
                color={Color.primaryV2}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Expenditure Report"
          component={ExpenditureReport}
          options={{
            tabBarLabel: ({}) => <Text style={styles.tabItem}>Report</Text>,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="file-document"
                color={Color.primaryV2}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
export default TabNavigator;

const styles = StyleSheet.create({
  tabItem: {
    color: Color.primaryV2,
    fontWeight: "bold",
  },
});
