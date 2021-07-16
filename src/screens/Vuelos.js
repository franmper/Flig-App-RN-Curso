import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Colores } from "../utils/Colores";
import { margenVertical, margenes, width, height } from "../utils/Dimensiones";

const Vuelos = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route.params.datos);
  }, [route]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={route.params.data.data}
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
                <Text>Origen: {route.params.datos.ciudadUno}</Text>
                <Text>Destino: {route.params.datos.ciudadDos}</Text>
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
