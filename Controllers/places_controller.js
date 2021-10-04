const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");
const { application } = require("express");
const Place = require("../models/place");

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;
  let place;
  try {
    place = await Place.findById(placeId).exec();
  } catch (err) {
    next(new HttpError("Server error please try again", 404));
  }
  if (!place) {
    return next(
      new HttpError("Could not find the place with id provided", 404)
    );
  } else {
    return res.send({ place });
  }
};

const getPlaceByUserId = async (req, res, next) => {
  const userId = req.params.uid;
  console.log(userId);
  let places;
  try {
    places = await Place.find({ creator: userId });
    console.log(places);
  } catch (err) {
    console.log(err);
    return next(new HttpError("Server is down , Please try again", 404));
  }

  if (!places || places.length == 0) {
    return next(
      new HttpError("Could not find the place with id provided", 404)
    );
  } else {
    return res.send({ places });
  }
};
const createPlace = async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log(error);
      return next(new HttpError("invalid input is passed", 404));
    }
    console.log(req.body);
    const { title, description, address, creator } = req.body;

    const newplace = new Place({
      title,
      description,
      address,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      creator,
    });

    const entry = await newplace.save();
    res.status(200).send("Place is added");
  } catch (err) {
    console.log(err);
    return next(new HttpError("server failder, please try again", 404));
  }
};
const updatePlace = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    console.log(error);
    return next(new HttpError("invalid input is passed", 422));
  }
  const placeId = req.params.pid;
  let updatePlace;
  let newPlace;
  const { title, description, address } = req.body;
  try {
    updatePlace = await Place.findById(placeId);
    (updatePlace.title = title), (updatePlace.description = description);
    updatePlace.address = address;
    newPlace = await updatePlace.save();
  } catch (err) {
    console.log(err);
    return next(new HttpError("Server is down", 422));
  }

  return res.send(newPlace);
};

const deletePlace = async (req, res, next) => {
  const pid = req.params.pid;
  let deletePlace;
  try {
    deletePlace = await Place.findById(pid);
    await deletePlace.remove();
  } catch (err) {
    return next(new HttpError("Server down, Please try again", 404));
  }

  return res.status(200).send({ message: "It is deleted" });
};

//export like this to pointing to these calls
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
