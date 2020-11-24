import React, { Component, useState, useEffect } from "react";
import { View, Image, StyleSheet, Dimensions, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";
const win = Dimensions.get("window");
const { height } = Dimensions.get("window");
import Constants from "expo-constants";
import axios from "axios";
export default function Launches() {
  const [state, setState] = useState(null);

  useEffect(() => {
    getSPACEX();
  }, []);

  url = `https://api.spacexdata.com/v4/launches/latest`;

  const getSPACEX = () => {
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

  if (!state)
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Launching...</Text>
      </View>
    );

  return (
    <Container style={(styles.container, { borderWidth: 0 })}>
      <Header style={styles.container} />
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1032/2020/05/30193412/Space-X.jpg",
                }}
              />
              <Body>
                <Text style={{ fontWeight: "700" }}>{"SpaceX"}</Text>
                <Text note>{"Launch and Land and Relaunch"}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: state.links.flickr.original[0] }}
                style={styles.image}
              />
              <Text style={{ marginLeft: 5, textAlign: "left" }}>
                {state.details}
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              {/* <Button transparent textStyle={{ color: "#87838B" }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button> */}
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
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
  image: {
    width: win.width,
    height: win.width,
    resizeMode: "contain",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: -22,
    marginBottom: 10,
    overflow: "hidden",
  },
  loading: {
    color: "#fff",
    margin: 24,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  explanation: {
    color: "#fff",
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
