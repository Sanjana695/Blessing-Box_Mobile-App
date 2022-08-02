import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";

// const source = {
//   uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
//   cache: true,
// };

function ExpenditureReport() {
  return (
    <View>
      {/* <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      /> */}
      <Text>some</Text>
    </View>
  );
}
export default ExpenditureReport;
const styles = StyleSheet.create({
  // pdf: {
  //   flex: 1,
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  // },
});
