import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Avatar, Drawer, Text } from "react-native-paper";
import Color from "../config/colors";

function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section>
            <View style={styles.avatar}>
              <ImageBackground
                source={require("../assets/drawerBg1.jpg")}
                resizeMode="cover"
                blurRadius={1}
              >
                <Image
                  source={require("../assets/logo.png")}
                  alt="logo.png"
                  resizeMode={"stretch"}
                  style={styles.avatarlogo}
                />
              </ImageBackground>
            </View>
            <Drawer.Item
              label="Home"
              icon="home"
              activeTintColor="red"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <Drawer.Item
              label="Choose Category"
              onPress={() => {
                props.navigation.navigate("NGO Categories");
              }}
            />
            <Drawer.Item
              label="Sign up"
              icon="sign up"
              onPress={() => {
                props.navigation.navigate("Sign up");
              }}
            />

            <Drawer.Item
              label="Login"
              onPress={() => {
                props.navigation.navigate("Login");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section>
        <Drawer.Item
          label="Sign Out"
          onPress={() => {
            props.navigation.navigate("Sign Out");
          }}
        />
      </Drawer.Section>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.primaryV1,
  },
  avatar: {
    backgroundColor: Color.white,
    // width: 400,
    // height: 250,
    // justifyContent: "center",
    // alignItems: "center",
  },
  avatarlogo: {
    marginTop: 20,
    width: 180,
    height: 180,
    alignSelf: "center",
  },
  section: {},
});
