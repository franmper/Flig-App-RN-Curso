import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import BotonPersonalizado from "../components/BotonPersonalizado";
import { Colores } from "../utils/Colores";
import { margenVertical } from "../utils/Dimensiones";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
import SeleccionarCiudad from "../components/SeleccionarCiudad";
import { ciudades } from "../utils/Ciudades";

const Home = () => {
  const [ciudadUno, setCiudadUno] = useState(ciudades[1].name);
  const [ciudadDos, setCiudadDos] = useState(ciudades[0].name);

  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <SeleccionarCiudad
        ciudadSeleccionada={ciudadUno}
        setCiudad={setCiudadUno}
        placeholder={"Seleccione ciudad de origen"}
      />
      <SeleccionarCiudad
        ciudadSeleccionada={ciudadDos}
        setCiudad={setCiudadDos}
        placeholder={"Seleccione ciudad de destino"}
      />
      {/* <BotonPersonalizado
        title={"volver"}
        onPress={() => nav.goBack()}
        backgroundColor={Colores.text}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    color: Colores.text,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: margenVertical,
  },
});

export default Home;
