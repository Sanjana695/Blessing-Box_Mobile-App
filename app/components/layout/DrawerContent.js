import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import Icon from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Drawer } from "react-native-paper";
import Color from "../../config/colors";

function DrawerContent(props) {
  const [nestedDrawerItem, setNestedDrawerItem] = useState(false);

  const NestedDrawerItem = () => {
    if (nestedDrawerItem == true) {
      setNestedDrawerItem(false);
    } else {
      setNestedDrawerItem(true);
    }
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section>
            <View style={styles.avatar}>
              <ImageBackground
                source={require("../../assets/drawerBg1.jpg")}
                resizeMode="cover"
                blurRadius={1}
              >
                <Image
                  source={require("../../assets/logo.png")}
                  alt="logo.png"
                  resizeMode={"stretch"}
                  style={styles.avatarlogo}
                />
              </ImageBackground>
            </View>
          </Drawer.Section>

          <Drawer.Section>
            <DrawerItem
              icon={() => (
                <MaterialCommunityIcons
                  name="home"
                  size={20}
                  color={Color.primaryV2}
                />
              )}
              label={() => <Text style={styles.drawerItem}>Home</Text>}
              onPress={() => {
                props.navigation.navigate("Blessing Box");
              }}
            />
          </Drawer.Section>

          <Drawer.Section>
            <DrawerItem
              label={() => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.drawerItem}>Choose Category</Text>
                  {
                    nestedDrawerItem == true && (
                      // icon=
                      // {() => (
                      <MaterialCommunityIcons
                        name="menu-up"
                        size={20}
                        color={Color.primaryV2}
                      />
                    )
                    // )}
                  }
                  {nestedDrawerItem == false && (
                    <MaterialCommunityIcons
                      name="menu-down"
                      size={20}
                      color={Color.primaryV2}
                    />
                  )}
                </View>
              )}
              onPress={() => {
                // props.navigation.navigate("NGO Categories");
                NestedDrawerItem();
              }}
              icon={() => (
                <MaterialCommunityIcons
                  name="menu-open"
                  size={20}
                  color={Color.primaryV2}
                />
              )}
            />
            {nestedDrawerItem == true && (
              <DrawerItem
                style={{ marginLeft: "20%" }}
                label={() => (
                  <Text style={styles.drawerSubItem}>Orphanage</Text>
                )}
                onPress={() => {
                  props.navigation.navigate("DisplayNGOs", {
                    category: "orphange",
                  });
                }}
              />
            )}

            {nestedDrawerItem == true && (
              <DrawerItem
                style={{ marginLeft: "20%" }}
                label={() => <Text style={styles.drawerSubItem}>Food</Text>}
                onPress={() => {
                  props.navigation.navigate("DisplayNGOs", {
                    category: "food",
                  });
                }}
              />
            )}

            {nestedDrawerItem == true && (
              <DrawerItem
                style={{ marginLeft: "20%" }}
                label={() => (
                  <Text style={styles.drawerSubItem}>Education</Text>
                )}
                onPress={() => {
                  props.navigation.navigate("DisplayNGOs", {
                    category: "education",
                  });
                }}
              />
            )}
          </Drawer.Section>

          <Drawer.Section>
            <DrawerItem
              label={() => <Text style={styles.drawerItem}>Sign up</Text>}
              onPress={() => {
                props.navigation.navigate("Sign up");
              }}
              icon={() => (
                <MaterialCommunityIcons
                  name="account-plus"
                  size={20}
                  color={Color.primaryV2}
                />
              )}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              label={() => <Text style={styles.drawerItem}>Login</Text>}
              onPress={() => {
                props.navigation.navigate("Login");
              }}
              icon={() => (
                <MaterialCommunityIcons
                  name="login"
                  size={20}
                  color={Color.primaryV2}
                />
              )}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section>
        <DrawerItem
          label={() => <Text style={styles.drawerItem}>Sign Out</Text>}
          onPress={() => {
            props.navigation.navigate("Sign Out");
          }}
          icon={() => (
            <MaterialCommunityIcons
              name="logout"
              size={20}
              color={Color.primaryV2}
            />
          )}
        />
      </Drawer.Section>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  avatar: {
    backgroundColor: Color.white,
  },
  avatarlogo: {
    marginTop: 20,
    width: 180,
    height: 180,
    alignSelf: "center",
  },

  drawerItem: {
    color: Color.primaryV1,
    fontWeight: "bold",
  },
  drawerSubItem: {
    color: Color.primaryV2,
    fontWeight: "bold",
  },
});
