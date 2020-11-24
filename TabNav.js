import * as React from "react";
import Constants from "expo-constants";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function HomeScreen() {
  return <Home />;
}

function LaunchesScreen() {
  return <Launches />;
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "lightgray",
        activeBackgroundColor: "black",
        inactiveBackgroundColor: "black",
        showLabel: false,
        style: styles.container,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"white"} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Launches"
        options={{
          tabBarLabel: "Launches",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="death-star"
              color={"white"}
              size={size}
            />
          ),
        }}
        component={LaunchesScreen}
      />
    </Tab.Navigator>
  );
}

export default function TabNav() {
  return (
    <NavigationContainer style={styles.container}>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderTopWidth: 0,
    paddingBottom: 3,
    backgroundColor: "#000",
  },
});
