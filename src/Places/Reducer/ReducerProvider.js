import React from "react";
import { createContext } from "react";
import { reducer } from "../Reducer/reduceFun";
import { useReducer } from "react";
export const PlaceReducer = createContext();
const ReducerProvider = (props) => {
  const [place_data, dispatch] = useReducer(reducer, []);
  return (
    <PlaceReducer.Provider value={{ place_data, dispatch }}>
      {props.children}
    </PlaceReducer.Provider>
  );
};

export default ReducerProvider;
