import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import BotonPersonalizado from "../components/BotonPersonalizado";
import { Colores } from "../utils/Colores";
import { margenVertical, width } from "../utils/Dimensiones";
import image from "../../assets/undraw_Travel_mode_re_2lxo.png";
import { buscarToken } from "../services/Fetchers";
import AsyncStorage from "@react-native-async-storage/async-storage"

const Onboarding = ({ navigation }) => {
  const [cargando, setCargando] = useState(true);

  React.useEffect(() => {
    buscarTokenAlInicio();
  }, []);

  const buscarTokenAlInicio = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    const data = await buscarToken();
    const guardar = await AsyncStorage.setItem("token", data.access_token)
    setCargando(false)
  };

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
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flig!</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <BotonPersonalizado
        title={"Viajar!"}
        onPress={() => navigation.navigate("Home", { text: "Volver atras" })}
        backgroundColor={Colores.primary}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: Colores.text,
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: margenVertical,
  },
  imageContainer: {
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: "contain",
  },
});

export default Onboarding;
