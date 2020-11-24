import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
const win = Dimensions.get("window");
const { height } = Dimensions.get("window");
import Constants from "expo-constants";
import axios from "axios";

export default function APOD() {
  const [state, setState] = useState(null);
  const [stateheight, setStateHeight] = useState({
    state: { screenHeight: 0 },
  });

  useEffect(() => {
    getAPOD();
  }, []);

  const url = `https://api.nasa.gov/planetary/apod?api_key=${"62yu1ssWmg3CciwxRDrhXq3qs5DS5gzuxNZwxXnl"}`;

  const getAPOD = () => {
    axios
      .get(url)
      .then(function (response) {
        // handle success
        console.log(response.data);
        setState(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  //loading text
  if (!state)
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Launching...</Text>
      </View>
    );

  const onContentSizeChange = (contentWidth, contentHeight) => {
    this.setStateHeight({ screenHeight: contentHeight });
  };

  const scrollEnabled = stateheight.screenHeight > height;
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{state.title}</Text>
      <Image
        source={{ uri: state.url }}
        style={styles.image}
        resizeMode={"contain"}
      />
      <ScrollView>
        <Text
          style={styles.explanation}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={onContentSizeChange}
        >
          {state.explanation}
        </Text>
      </ScrollView>
    </View>
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
  paragraph: {
    color: "#fff",
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loading: {
    color: "#fff",
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: win.width,
    height: win.width,
    resizeMode: "contain",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: -15,
    overflow: "hidden",
  },
  explanation: {
    color: "#fff",
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
