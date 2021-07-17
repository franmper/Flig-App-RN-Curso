import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ciudades } from "../utils/Ciudades";
export const buscarToken = async () => {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", "11KrwwbxZOZUKjAO0B4f0OVyKVX1ABbo");
  params.append("client_secret", "aa5J3dbqnExk8677");

  const data = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    params
  );

  return data.data;
};

export const buscarVuelos = async (datos) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const originLocationCode = ciudades.find(
      (item) => item.name === datos.ciudadUno
    );
    const destinationLocationCode = ciudades.find(
      (item) => item.name === datos.ciudadDos
    );
    const url = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${originLocationCode.code}&destinationLocationCode=${destinationLocationCode.code}&departureDate=${datos.fecha}&adults=${datos.pasajeros}&currencyCode=ARS`;
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
