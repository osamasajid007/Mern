const express = require("express");
const { check } = require("express-validator");
// const PlacesController = require("../Controllers/places_controller");
const router = express.Router();
const usersController = require("../Controllers/users_controllers");
router.get("/", usersController.getAllUsers);
router.post(
  "/signup",
  [
    check("username").not().isEmpty().trim().isLength({ min: 3, max: 50 }),
    check("email").isEmail().trim(),
    check("password").not().isEmpty().normalizeEmail().trim(),
  ],
  usersController.registerUser
);
router.post("/login", usersController.loginUser);
module.exports = router;
