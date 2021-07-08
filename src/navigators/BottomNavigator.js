import React from "react";
import { View, Text } from "react-native";
import { Colores } from "../utils/Colores";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Onboarding from "../screens/Onboarding";
import Home from "../screens/Home";

const BottomNav = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <BottomNav.Navigator initialRouteName={"Onboarding"} screenOptions={{
      showLabel: false,
    }}>
      <BottomNav.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          tabBarBadge: "3",
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: Colores.primary,
                width: 30,
                height: 30,
                borderRadius: 50,
              }}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <View
              style={{
                backgroundColor: Colores.background,
                width: 30,
                height: 30,
                borderRadius: 50,
              }}
            />
          ),
        }}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigator;
