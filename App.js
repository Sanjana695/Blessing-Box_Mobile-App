import "react-native-gesture-handler";
import HomeScreen from "./app/screens/HomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import NgoDetails from "./app/screens/NgoDetails";
import DisplayNGOs from "./app/screens/DisplayNGOs";
import NGOProjects from "./app/screens/NGOProjects";
import RegisterScreen from "./app/screens/RegisterScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./app/components/layout/DrawerContent";
import ChooseCategory from "./app/screens/ChooseCategory";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigator from "./app/components/layout/TabNavigator";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={DrawerRoute} />
        <Stack.Screen name="DisplayNGOs" component={DisplayNGOs} />
        <Stack.Screen name="ChooseCategory" component={ChooseCategory} />
        <Stack.Screen name="NGOsDetails" component={TabNavigator} />
        <Stack.Screen name="NGOProjects" component={NGOProjects} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerRoute() {
  const Drawer = createDrawerNavigator();

  return (
    <>
      <Drawer.Navigator
        useLegacyImplementation={true}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="Home2" component={HomeScreen} />
        <Drawer.Screen name="NGO Categories" component={ChooseCategory} />
        <Drawer.Screen name="Sign up" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Sign Out" component={HomeScreen} />
      </Drawer.Navigator>
    </>
  );
}
