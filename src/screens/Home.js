import React, { useCallback, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import BotonPersonalizado from "../components/BotonPersonalizado";
import { Colores } from "../utils/Colores";
import { margenVertical, width } from "../utils/Dimensiones";
import { useNavigation, useRoute, useFocusEffect } from "@react-navigation/native";

const Home = ({ navigation, route }) => {
  const nav = useNavigation();
  const rte = useRoute();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <BotonPersonalizado
        title={"volver"}
        onPress={() => nav.goBack()}
        backgroundColor={Colores.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colores.background,
    alignItems: "center",
    justifyContent: "center",
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
