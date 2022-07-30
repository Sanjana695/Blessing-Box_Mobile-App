import React from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
function Card({ title, subTitle, image, flexDirection = "row" }) {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.card, { flexDirection: flexDirection }]}>
        {/* <View style={styles.cardImage}> */}
        <Image style={styles.image} source={image} />
        {/* </View> */}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    // paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    padding: 7,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.primaryV1,
    // overflow: "hidden",
    height: "96%",
    width: "100%",
    // marginBottom: 4,
    justifyContent: "space-between",
  },

  detailsContainer: {
    padding: 15,
  },
  image: {
    width: 120,
    height: 80,
    marginVertical: 10,
    left: 10,
  },
  subTitle: {
    color: colors.white,
    fontWeight: "bold",
  },
  title: {
    color: colors.white,
    marginBottom: 7,
  },
});
export default Card;
