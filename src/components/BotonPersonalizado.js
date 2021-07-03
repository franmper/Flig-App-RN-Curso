import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { Colores } from "../utils/Colores";
import { margenes, margenVertical } from "../utils/Dimensiones";

const BotonPersonalizado = ({ title, onPress, backgroundColor }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: backgroundColor }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    opacity: 0.7,
    width: 200,
    height: 70,
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
