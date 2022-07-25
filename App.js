import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NgoDetails from "./app/screens/NgoDetails";
import OrphanageNgos from "./app/screens/OrphanageNgos";
import RegisterScreen from "./app/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./app/components/DrawerContent";
import ChooseCategory from "./app/screens/ChooseCategory";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    // <LoginScreen />
    // <RegisterScreen />
    // <HomeScreen />
    // <OrphanageNgos />
    // <NgoDetails />
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="NGO Categories" component={ChooseCategory} />
        <Drawer.Screen name="Sign up" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Sign Out" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
