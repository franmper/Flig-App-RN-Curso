import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Colores } from "../utils/Colores";
import { margenVertical, margenes, width, height } from "../utils/Dimensiones";
import { useSelector } from "react-redux";

const Vuelos = () => {
  const vuelos = useSelector((state) => state.vuelosReducer.vuelos.data);
  const datos = useSelector((state) => state.vuelosReducer.vuelos.datos);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={vuelos}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{ borderBottomWidth: 2, borderColor: Colores.primary }}
          />
        )}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: width * 0.8,
                height: height * 0.25,
                borderRadius: 5,
                marginVertical: margenes,
                padding: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Origen: {datos.ciudadUno}</Text>
                <Text>Destino: {datos.ciudadDos}</Text>
              </View>
              <Text>Precio: ${item.price.grandTotal}</Text>
              <Text>Duración: {item.itineraries[0].duration}</Text>
              <Text>
                Tipo de vuelo:{" "}
                {item.itineraries[0].segments.length > 1
                  ? "Con Escalas"
                  : "Directo"}
              </Text>
            </View>
          );
        }}
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
});

export default Vuelos;
