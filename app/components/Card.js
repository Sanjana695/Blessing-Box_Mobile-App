import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
function Card({ title, subTitle, image, flexDirection = "row" }) {
  return (
    <>
      <View style={[styles.card, { flexDirection: flexDirection }]}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>
            {title}
          </AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.primaryV1,
    overflow: "hidden",
    flexDirection: "row",
    marginBottom: 20,
    alignSelf: "center",
  },
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: 120,
    height: 120,
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
