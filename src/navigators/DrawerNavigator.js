import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";

const DrawerNav = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNav.Navigator initialRouteName={"Onboarding"}>
      <DrawerNav.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <DrawerNav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
