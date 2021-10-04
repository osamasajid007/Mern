const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const postRoutes = require("./Routes/places");
const HttpError = require("./models/http-error");
const UserRoute = require("./Routes/User");
const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use("/users", UserRoute);
app.use("/api/places", postRoutes);

//default route error handling
app.use((req, res, next) => {
  return next(
    new HttpError("Could not find the place with route provided", 404)
  );
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  } else {
    return res
      .status(error.code || 500)
      .json({ message: error.message || "A unknown error is Occured" });
  }
});
// db connection
mongoose
  .connect(
    "mongodb+srv://newUser123:6Zezp5r46nkwPaNR@cluster0.vcpr9.mongodb.net/places?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(7000, () => {
      console.log("server start at:7000");
    })
  )
  .catch((err) => {
    console.log(err);
  });
