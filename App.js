import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigators/AppNavigator";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import BottomNavigator from "./src/navigators/BottomNavigator";
import TopTabNavigator from "./src/navigators/TopTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TopTabNavigator />
    </NavigationContainer>
  );
}
