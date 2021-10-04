const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const mongoose = require("mongoose");

const USERS = [
  {
    id: "u1",
    username: "Osama",
    email: "osamasajid38@gamil.com",
    createdAt: new Date(),
  },
];
let allUsers;
const getAllUsers = async (req, res, next) => {
  try {
    allUsers = await User.find({}, "-password");
  } catch (err) {
    console.log(err);
    return next(new HttpError("server is down, Please try again"));
  }
  if (!allUsers || allUsers.length == 0) {
    return new HttpError("No user found", 404);
  } else {
    return res.status(200).send(allUsers);
  }
};
const registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError("Input Fields are not valid", 404));
  }
  const { username, email, password, places } = req.body;
  console.log(username, email, password);
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Server Is down", 404));
  }

  if (!existingUser) {
    const newUser = new User({
      username,
      email,
      password,
      image:
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
      places,
    });
    let register;
    try {
      register = await newUser.save();
      console.log(register.id);
    } catch (err) {
      console.log(err);
      return next(new HttpError("Server Is down", 404));
    }
    return res.status(200).send({ message: "User is Registered" });
  }
  return next(new HttpError("User Email is already Reginster", 404));
};
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    console.log(err);
    return next(new HttpError("Server is down, try again", 404));
  }

  if (!existingUser || existingUser.password !== password) {
    return next(new HttpError("User Credentials are Wrong", 404));
  } else {
    return res.status(200).send({ message: "User is Login" });
  }
};
exports.getAllUsers = getAllUsers;
exports.registerUser = registerUser;
exports.loginUser = loginUser;
