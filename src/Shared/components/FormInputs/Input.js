import React from "react";
import "./Input.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val, isvalid: true };
    case "TOUCH":
      return { ...state, istouch: true };
    default:
      return state;
  }
};
const Input = (props) => {
  const [inputFields, dispatch] = React.useReducer(reducer, {
    value: "",
    istouch: false,
    isvalid: false,
  });

  const handleChange = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value });
  };
  const handleTouch = () => {
    dispatch({ type: "TOUCH" });
  };
  console.log(inputFields);
  const element =
    props.element == "input" ? (
      <input
        id={props.id}
        type={props.type}
        value={inputFields.value}
        onBlur={handleTouch}
        onChange={handleChange}
      />
    ) : (
      <textarea
        id={props.id}
        value={inputFields.value}
        rows={props.row || 3}
        onBlur={handleTouch}
        onChange={handleChange}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputFields.isvalid && inputFields.istouch && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputFields.isvalid && inputFields.istouch && (
        <p>{props.errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
