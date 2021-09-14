import React from "react";
import { createContext } from "react";
import { RegistrationReducer } from "./ReducerFun";
import { useReducer } from "react";
export const SignupContext = createContext();

const Reducer_register_Provider = (props) => {
  const [RegisterUsers, dispatch] = useReducer(RegistrationReducer, []);

  return (
    <SignupContext.Provider value={{ RegisterUsers, dispatch }}>
      {props.children}
    </SignupContext.Provider>
  );
};

export default Reducer_register_Provider;
