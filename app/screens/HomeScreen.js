import React, { useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import Card from "../components/Card";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
// import apiRequest from "../Components/APICallHandler";

// import RadialGradient from "react-native-radial-gradient";
import { setNGOsInfo } from "../redux/ngo/action";

function HomeScreen({ category }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    async function getDetails() {
      try {
        await fetch("http://10.102.142.31:8080/ngodetails", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            dispatch(setNGOsInfo(data));
            console.log("data is ", data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getDetails();
  }, []);

  const ngoData = useSelector((state) => state.detailsReducer);
  console.log("ngosdata", ngoData.education);
  return (
    <View style={styles.homecontainer}>
      <LinearGradient
        colors={["rgb(42, 5, 143)", "rgba(60, 35, 131,0.8)", "rgba(0,0,0,0.5)"]}
        style={styles.linearbody}
      >
        <ImageBackground
          source={require("../assets/bg.jpg")}
          alt="bg.png"
          style={styles.bgPic}
        />
        <Image
          blurRadius={0}
          style={styles.background}
          source={require("../assets/homescreen.png")}
        />
        <AppText style={styles.text}>
          Giving a <AppText style={styles.spanColor}>LITTLE</AppText> is better
          than not giving at ALL!
        </AppText>
      </LinearGradient>

      {/* ///////////////////category portion///////////////////////// */}
      <View style={styles.container}>
        <AppText style={styles.heading}>
          Choose, where you want to donate
        </AppText>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DisplayNGOs", { category: "Orphanage" })
          }
        >
          <Card
            title="Orphanage"
            subTitle="1000 Rupees Donated"
            image={require("../assets/orphanage1.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DisplayNGOs", { category: "food" })
          }
        >
          <Card
            title="Food"
            subTitle="1000 Rupees Donated"
            image={require("../assets/food1.png")}
            flexDirection="row-reverse"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DisplayNGOs", { category: "education" })
          }
        >
          <Card
            title="Education"
            subTitle="1000 Rupees Donated"
            image={require("../assets/education1.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  homecontainer: {
    height: "65%",
    // paddingTop: StatusBar.currentHeight,
  },
  background: {
    // flex: 1,
    width: "60%",
    height: "60%",
    alignSelf: "center",
    position: "absolute",
  },
  text: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "bold",
    top: "80%",
    position: "absolute",
    left: 10,
  },

  spanColor: {
    color: colors.primaryV2,
    fontWeight: "bold",
  },
  linearbody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgPic: {
    flex: 1,
    position: "relative",
  },

  //////////////// category portion//////////
  heading: {
    color: colors.primaryV2,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    height: "35%",
    top: 25,
  },
});
export default HomeScreen;
