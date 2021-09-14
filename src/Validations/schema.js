import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export const PlaceSchema = yup.object().shape({
  Place: yup.string().required().min(4).max(40),
  Description: yup.string().required().min(4).max(40),
  Address: yup.string().required().min(4).max(150),
});
export const LoginSchema = yup.object().shape({
  Email: yup.string().required("Email is Required").email(),
  Password: yup.string().required().min(4).max(20),
});

export const RegisterSchema = yup.object().shape({
  Username: yup.string().required("UserName is required").min(4).max(25),
  Email: yup.string().required("Email is Required").email(),
  Password: yup.string().required().min(4).max(20),
});
