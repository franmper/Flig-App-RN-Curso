import React, { useRef } from "react";
import { Text, Pressable, StyleSheet, Animated, Easing } from "react-native";
import { Colores } from "../utils/Colores";
import { margenes, margenVertical } from "../utils/Dimensiones";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const BotonPersonalizado = ({ title, onPress, backgroundColor }) => {
  const heightAnimated = useRef(new Animated.Value(70)).current;

  const widthAnimated = heightAnimated.interpolate({
    inputRange: [70, 80],
    outputRange: [200, 220],
  });

  const onPressAnimated = () => {
    Animated.timing(heightAnimated, {
      toValue: 80,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(heightAnimated, {
        toValue: 70,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start();
    });
  };

  return (
    <AnimatedPressable
      onPressIn={onPressAnimated}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          height: heightAnimated,
          width: widthAnimated,
        },
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    opacity: 0.7,
    padding: margenes,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: margenVertical,
  },
  text: {
    color: Colores.background,
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default BotonPersonalizado;
