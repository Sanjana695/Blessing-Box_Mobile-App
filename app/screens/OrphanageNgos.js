import React from "react";
import { StyleSheet } from "react-native";
import Card from "../components/Card";

function OrphanageNgos() {
  return (
    <>
      <Card
        title="Chippa"
        subTitle={false}
        image={require("../assets/chippa.png")}
      />
    </>
  );
}
export default OrphanageNgos;
