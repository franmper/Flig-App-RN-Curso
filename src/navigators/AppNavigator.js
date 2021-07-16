import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";
import Vuelos from "../screens/Vuelos"
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
          headerStyle: { backgroundColor: Colores.background },
          headerTintColor: Colores.text,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />
      <AppNav.Screen
        name="Vuelos"
        component={Vuelos}
        options={{
          headerStyle: { backgroundColor: Colores.background },
          headerTintColor: Colores.text,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />
    </AppNav.Navigator>
  );
};

export default AppNavigator;
