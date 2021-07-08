import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import { Colores } from "../utils/Colores";

const AppNav = createStackNavigator();

const AppNavigator = () => {
  return (
    <AppNav.Navigator initialRouteName={"Onboarding"}>
      <AppNav.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
        }}
      />
      <AppNav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </AppNav.Navigator>
  );
};

export default AppNavigator;
