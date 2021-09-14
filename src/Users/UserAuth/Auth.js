import React from "react";
import Button from "../../Shared/components/Button/Button";
import "../../Shared/components/FormInputs/Input.css";
import Card from "../../Shared/components/UIelements/Card/Card";
import "./Auth.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../Validations/schema";
import { AuthContext } from "./AuthReducer/Reducer_Auth_Provider";
import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Auth = () => {
  const { Auth_login_user, dispatch, login, setLogin } =
    useContext(AuthContext);
  const history = useHistory();
  console.log(login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const submitForm = (data) => {
    console.log(data);
    dispatch({ type: "LOGIN", userCred: { email: data.Email } });
    setLogin(true);
    document.querySelector(".placeform").reset();
    history.push("/");
  };
  console.log(errors);
  console.log(Auth_login_user);
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form className="placeform" onSubmit={handleSubmit(submitForm)}>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input
            name="Email"
            type="text"
            placeholder="Enter Email"
            {...register("Email")}
          />
          <p id="error" style={{ color: "red" }}>
            {errors.Email?.message}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="Password"
            type="password"
            placeholder="Enter Password"
            {...register("Password")}
          />
          <p id="error" style={{ color: "red" }}>
            {errors.Password?.message}
          </p>
        </div>
        <Button
          type="submit"
          disabled={
            Object.keys(errors).length <= 0 && login == false ? false : true
          }
        >
          LOGIN
        </Button>
      </form>
      <Link to="/signup">
        <Button inverse>SWITCH TO SIGNUP</Button>
      </Link>
    </Card>
  );
};

export default Auth;
