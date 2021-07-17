import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BotonPersonalizado from "../components/BotonPersonalizado";
import { Colores } from "../utils/Colores";
import { margenVertical, margenes } from "../utils/Dimensiones";
import { useNavigation } from "@react-navigation/native";
import SeleccionarCiudad from "../components/SeleccionarCiudad";
import { ciudades } from "../utils/Ciudades";

import { actionBuscarVuelos } from "../action/vuelosAction";

const today = new Date();

const Home = () => {
  const [nombre, setNombre] = useState("");
  const [ciudadUno, setCiudadUno] = useState(ciudades[1].name);
  const [ciudadDos, setCiudadDos] = useState(ciudades[0].name);
  const [pasajeros, setPasajeros] = useState("0");
  const [fecha, setFecha] = useState(
    `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  );
  const [cargando, setCargando] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();


  if (cargando) {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={Colores.primary} size={"large"} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.placeholder}>Como es tu nombre?</Text>
        <TextInput
          value={nombre}
          onChangeText={(value) => setNombre(value)}
          style={[styles.input, { textAlign: "left" }]}
          selectTextOnFocus
        />
      </View>
      <SeleccionarCiudad
        ciudadSeleccionada={ciudadUno}
        setCiudad={setCiudadUno}
        placeholder={"Seleccioná ciudad de origen"}
      />
      <SeleccionarCiudad
        ciudadSeleccionada={ciudadDos}
        setCiudad={setCiudadDos}
        placeholder={"Seleccioná ciudad de destino"}
      />
      <View>
        <Text style={styles.placeholder}>Cantidad de pasajeros</Text>
        <TextInput
          value={pasajeros}
          onChangeText={(value) => setPasajeros(value)}
          style={styles.input}
          keyboardType="numeric"
          selectTextOnFocus
        />
      </View>
      <View>
        <Text style={styles.placeholder}>Fecha de viaje</Text>
        <TextInput
          value={fecha}
          onChangeText={(value) => setFecha(value)}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={{ marginTop: 80 }}>
        <BotonPersonalizado
          title={"Buscar"}
          onPress={async () => {
            setCargando(true);
            const datos = {
              nombre,
              ciudadUno,
              ciudadDos,
              pasajeros,
              fecha,
            };
            dispatch(
              actionBuscarVuelos(datos, () => {
                setCargando(false);
                navigation.navigate("Vuelos");
              })
            );
            // navigation.navigate("Vuelos", { data, datos });
          }}
          backgroundColor={Colores.primary}
        />
      </View>
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
  input: {
    width: 230,
    borderBottomColor: Colores.primary,
    borderBottomWidth: 3,
    color: Colores.text,
    fontSize: 30,
    paddingHorizontal: 5,
    textAlign: "center",
  },
  placeholder: { color: Colores.text, fontSize: 15, marginTop: 20 },
});

export default Home;
