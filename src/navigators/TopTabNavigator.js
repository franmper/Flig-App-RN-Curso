import React from "react";
import { View, Text } from "react-native";
import { Colores } from "../utils/Colores";
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopNav = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <TopNav.Navigator initialRouteName={"Onboarding"}>
      <TopNav.Screen
        name="Onboarding"
        component={Onboarding}
      />
      <TopNav.Screen
        name="Home"
        component={Home}
        
      />
    </TopNav.Navigator>
  );
};

export default TopTabNavigator;
