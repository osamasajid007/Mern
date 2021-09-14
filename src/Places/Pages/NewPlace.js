import React from "react";
import Button from "../../Shared/components/Button/Button";
import "../../Shared/components/FormInputs/Input.css";
import "./NewPlace.css";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { PlaceReducer } from "../Reducer/ReducerProvider";
import { PlaceSchema } from "../../Validations/schema";
const NewPlace = () => {
  const { place_data, dispatch } = useContext(PlaceReducer);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PlaceSchema),
  });

  const submitForm = (data) => {
    console.log(data);
    dispatch({
      type: "ADD",
      Data: {
        Place: data.Place,
        Description: data.Description,
        Address: data.Address,
      },
    });
    document.querySelector(".place-form").reset();
    history.push("/");
  };
  console.log();
  return (
    <form className="place-form" onSubmit={handleSubmit(submitForm)}>
      <div className="form-control">
        <label htmlFor="place">Place</label>
        <input
          type="text"
          name="Place"
          placeholder="Enter the place"
          {...register("Place")}
        />
        <p id="error" style={{ color: "red" }}>
          {errors.Place?.message}
        </p>
      </div>

      <div className="form-control">
        <label htmlFor="description">Description</label>
        <textarea type="text" name="Description" {...register("Description")} />
      </div>
      <p id="error" style={{ color: "red" }}>
        {errors.Description?.message}
      </p>
      <div className="form-control">
        <label htmlFor="Address">Address</label>
        <input type="text" name="Address" {...register("Address")} />
      </div>

      <p id="error" style={{ color: "red" }}>
        {errors.Address?.message}
      </p>

      <div className="form-control">
        <Button
          type="submit"
          disabled={Object.keys(errors).length <= 0 ? false : true}
        >
          Add Place
        </Button>
      </div>
    </form>
  );
};

export default NewPlace;
