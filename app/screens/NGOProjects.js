import React, { useState, useEffect } from "react";
import Divider from "react-native-divider";
import {
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";

import ProjectCard from "../components/ProjectCard";
import apiRequest from "../components/APICallHandler";

import { useNavigation, useRoute } from "@react-navigation/native";

//import useSelector from redux
import { useSelector } from "react-redux";

////*******main component-->NGOprojects********///////
function NGOProjects() {
  /////********set state*********//
  // const [ngoInfo, setNgoInfo] = useState({});
  const [projects, setProjects] = useState([]);
  const reduxData = useSelector((state) => state);

  const navigation = useNavigation();

  ////////******store reducers in reduxData*********/////////
  const { ngoDetailReducer, detailsReducer } = reduxData;
  // console.log("details ngo", detailsReducer);
  // console.log("ngodetails", ngoDetailReducer);
  // console.log("project reducer", projectReducer);

  ///service type should be in lower case
  const serviceType = ngoDetailReducer.ngoData.serviceType.toLowerCase();
  console.log(serviceType);

  //display ngo project detail
  const ngos = detailsReducer[serviceType].filter(
    (ngo) => ngo.id == ngoDetailReducer.ngoData.id
  );
  console.log("NGOS PROJECTS:", ngos[0].projects);

  // *************display project card for donor in useEffect*************
  useEffect(() => {
    apiRequest(`ngo/${ngos[0].id}`, null, "GET", null, null)
      .then((res) => {
        console.log(res);
        if (res.success) {
          if (res.projects) {
            // console.log("projcsss", res.projects);
            setProjects(() => res.projects);
          }
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <ScrollView>
      <View style={styles.projectsContainer}>
        <Divider orientation="center">
          <AppText style={styles.subheadings}>Our Projects</AppText>
        </Divider>
        <AppText style={styles.subtext}>{ngos[0].projects}</AppText>

        {/* ************SHOW PROJECTS CARDS***************** */}
        {projects.map((itm) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Project Description", { itm })
              }
              key={itm.id}
            >
              <ProjectCard
                title={itm.title}
                targetAmount={itm.target}
                percent={0.5}
                collected={"50%"}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
export default NGOProjects;

const styles = StyleSheet.create({
  projectsContainer: {
    paddingTop: StatusBar.currentHeight,
  },
  subheadings: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subtext: {
    // justifyContent: "flex-start",
    textAlign: "justify",
    padding: 12,
    // lineHeight: "200%",
  },
});
