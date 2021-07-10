import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { margenes } from "../utils/Dimensiones";
import { Colores } from "../utils/Colores";
import { ciudades } from "../utils/Ciudades";

const SeleccionarCiudad = ({
  ciudadSeleccionada = ciudades[0].name,
  setCiudad,
  placeholder
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpen(!open)}>
        <View style={styles.container}>
          <Text style={styles.placeholder}>{placeholder}</Text>
          <Text style={styles.seleccionada}>{ciudadSeleccionada}</Text>
        </View>
      </Pressable>
      {open && (
        <View style={styles.listContainer}>
          <FlatList
            data={ciudades}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {
                  setCiudad(item.name);
                  setOpen(false)
                }}
              >
                <View styles={styles.itemsContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subTitle}>{item.code}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: { width: 200, marginTop: margenes },
  seleccionada: {
    borderBottomColor: Colores.primary,
    borderBottomWidth: 3,
    color: Colores.text,
    fontSize: 30,
    paddingHorizontal: 5,
  },
  listContainer: {
    height: 150,
    width: 200,
    borderColor: Colores.primary,
    borderWidth: 2,
    padding: 5,
    backgroundColor: Colores.background,
  },
  itemsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { color: Colores.text, fontSize: 20 },
  subTitle: { color: Colores.text, fontSize: 10, textAlign: "right" },
  placeholder: {color: Colores.text, fontSize:15}
});

export default SeleccionarCiudad;
