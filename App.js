import "react-native-gesture-handler";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import DisplayNGOs from "./app/screens/DisplayNGOs";
import NGOProjects from "./app/screens/NGOProjects";
import RegisterScreen from "./app/screens/RegisterScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./app/components/layout/DrawerContent";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/components/layout/TabNavigator";
import { Provider } from "react-redux";
import store from "./app/components/store";
import colors from "./app/config/colors";
import { View, StatusBar, StyleSheet } from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={DrawerRoute} />
          <Stack.Screen name="sign-in" component={RegisterScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="DisplayNGOs" component={DisplayNGOs} />
          <Stack.Screen name="NGODetails" component={TabNavigator} />
          <Stack.Screen name="NGOProjects" component={NGOProjects} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

function DrawerRoute() {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        useLegacyImplementation={true}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Blessing Box"
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
          name="Sign up"
          component={RegisterScreen}
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
          onClose={() => closeDrawer()}
        />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Sign Out" component={HomeScreen} />
      </Drawer.Navigator>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
});
