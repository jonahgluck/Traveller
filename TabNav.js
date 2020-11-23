import * as React from "react";
import Constants from "expo-constants";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeIcon from "@material-ui/icons/Home";

function HomeScreen() {
  return <Home />;
}

function SettingsScreen() {
  return <Settings />;
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
        name="Settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={"white"}
              size={size}
            />
          ),
        }}
        component={SettingsScreen}
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
