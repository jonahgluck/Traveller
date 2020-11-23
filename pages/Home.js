import * as React from "react";
import Constants from "expo-constants";
import APOD from "../components/APOD";
import { Text, View, StyleSheet } from "react-native";

function Home() {
  return (
    <>
      <View style={styles.container}>
        <APOD />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 8,
  },
});

export default Home;
