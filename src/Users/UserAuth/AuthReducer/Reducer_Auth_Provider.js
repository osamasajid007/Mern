import React, { useReducer, createContext } from "react";
import { LoginReducer } from "./ReducerFun";
export const AuthContext = createContext();

const Reducer_Auth_Provider = (props) => {
  const [Auth_login_user, dispatch] = useReducer(LoginReducer, []);
  const [login, setLogin] = React.useState(false);
  return (
    <AuthContext.Provider
      value={{ Auth_login_user, dispatch, login, setLogin }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default Reducer_Auth_Provider;
