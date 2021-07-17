import { BUSCAR_VUELOS } from "../reducers/Constantes";
import { buscarVuelos } from "../services/Fetchers";
export const actionBuscarVuelos = (datos, callback) => async (dispatch) => {
  try {
    const data = await buscarVuelos(datos);
    dispatch({
      type: BUSCAR_VUELOS,
      payload: { ...data, datos },
    });
    callback();
  } catch (error) {
    console.log(error);
  }
};
