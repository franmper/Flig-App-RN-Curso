import React from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import BotonPersonalizado from "../components/BotonPersonalizado";
import { Colores } from "../utils/Colores";
import { margenVertical, width } from "../utils/Dimensiones";
import image from "../../assets/undraw_Travel_mode_re_2lxo.png";

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flig!</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <BotonPersonalizado
        title={"Viajar!"}
        onPress={() => console.log("Viajá")}
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
