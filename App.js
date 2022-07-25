import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NgoDetails from "./app/screens/NgoDetails";
import OrphanageNgos from "./app/screens/OrphanageNgos";
import RegisterScreen from "./app/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "./app/components/DrawerNavigator";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    // <LoginScreen />
    // <RegisterScreen />
    // <HomeScreen />
    // <OrphanageNgos />
    <NgoDetails />
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     drawerContent={(props) => <DrawerNavigator {...props} />}
    //   >
    //     <Drawer.Screen name="Home" component={HomeScreen} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}
