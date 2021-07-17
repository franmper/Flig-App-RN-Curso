import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { vuelosReducer } from "../reducers/VuelosReducers";

const reducers = combineReducers({
  vuelosReducer: vuelosReducer,
});

const initialState = {
  vuelosReducer: {
    vuelos: [],
  },
};

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
