import React from "react";
import Button from "../../Shared/components/Button/Button";
import Card from "../../Shared/components/UIelements/Card/Card";
import "./Auth.css";
import "../../Shared/components/FormInputs/Input.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../Validations/schema";
import { useHistory } from "react-router";
import { useContext } from "react";
import { SignupContext } from "./AuthReducer/Reducer_register_Provider";

const Signup = () => {
  const { RegisterUsers, dispatch } = useContext(SignupContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });
  const submitForm = (data) => {
    console.log(data);

    dispatch({
      type: "REGISTER",
      userCred: {
        username: data.Username,
        email: data.Email,
        Image:
          "https://scontent.flhe7-1.fna.fbcdn.net/v/t1.6435-9/182201455_1788657598008521_5433889576016952215_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHnPBEC82Oh0dLv6kG1Kykrqp8sT32wjM2qnyxPfbCMzZliMUnhToyBOsRLkNk5RWxr31F07MHN6Y0MzBuMT3cO&_nc_ohc=if0vqEE1KVUAX8_tMKs&_nc_ht=scontent.flhe7-1.fna&oh=92ac9d19da45372ab83e1ad8f39a0d81&oe=615F86FC",
        Places: 3,
      },
    });
    // setLogin(true);
    document.querySelector(".placeform").reset();
    console.log(RegisterUsers);
    setTimeout(() => {
      history.push("/auth");
    }, 2000);
  };
  console.log(errors);

  return (
    <Card className="authentication">
      <h2>Signup</h2>
      <hr />
      <form className="placeform" onSubmit={handleSubmit(submitForm)}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="Username"
            placeholder="Username Enter"
            {...register("Username")}
          />
          <p id="error" style={{ color: "red" }}>
            {errors.Email?.message}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="Email"
            placeholder="Email Enter"
            {...register("Email")}
          />
          <p id="error" style={{ color: "red" }}>
            {errors.Email?.message}
          </p>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="Password"
            placeholder="Password Enter"
            {...register("Password")}
          />
          <p id="error" style={{ color: "red" }}>
            {errors.Password?.message}
          </p>
        </div>
        <Button
          type="submit"
          // disabled={
          //   // Object.keys(errors).length <= 0 && login == false ? false : true
          // }
        >
          REGISTER
        </Button>
      </form>
    </Card>
  );
};

export default Signup;
