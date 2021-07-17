import { BUSCAR_VUELOS } from "./Constantes";
export const vuelosReducer = (state = { vuelos: [] }, action) => {
  switch (action.type) {
    case BUSCAR_VUELOS:
      return { vuelos: action.payload };
    default:
      return state;
  }
};
