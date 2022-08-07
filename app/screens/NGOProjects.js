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
import { useSelector } from "react-redux";
import ProjectCard from "../components/ProjectCard";
import apiRequest from "../components/APICallHandler";
import ExpenditureReport from "./ExpenditureReport";

function NGOProjects() {
  // const [ngoInfo, setNgoInfo] = useState({});
  const [projects, setProjects] = useState([]);

  const reduxData = useSelector((state) => state);

  const { ngoDetailReducer, detailsReducer } = reduxData;
  console.log(detailsReducer);
  console.log(ngoDetailReducer);

  const serviceType = ngoDetailReducer.ngoData.serviceType.toLowerCase();
  console.log(serviceType);

  const ngos = detailsReducer[serviceType].filter(
    (ngo) => ngo.id == ngoDetailReducer.ngoData.id
  );

  console.log("NGOS PROJECTS:", ngos[0].projects);

  // const filteredNgo = ngos;
  // setNgoInfo(() => ngos[0]);
  // console.log("NGOIDDD", ngos[0].ngoId);

  useEffect(() => {
    apiRequest(`ngos/${ngos[0].ngoId}/project`, null, "GET", null, null)
      .then((res) => {
        setProjects(res);
        console.log("cards data", res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.projectsContainer}>
        <Divider orientation="center">
          <AppText style={styles.subheadings}>Our Projects</AppText>
        </Divider>
        <AppText style={styles.subtext}>{ngos[0].projects}</AppText>

        <Divider orientation="center">
          <AppText style={styles.subheadings}>View Expenditure Report</AppText>
        </Divider>
        <ExpenditureReport />
        {projects.map((project) => {
          return (
            <TouchableOpacity key={project.id}>
              <ProjectCard
                projectName={project.title}
                targetAmount={project.target}
                percent={0.5}
                status={"50%"}
                onPress={false}
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
