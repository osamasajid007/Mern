const express = require("express");
const { check } = require("express-validator");
const PlacesController = require("../Controllers/places_controller");
const router = express.Router();

router.get("/:pid", PlacesController.getPlaceById);
//getting place by userid
router.get("/user/:uid", PlacesController.getPlaceByUserId);
router.post(
  "/",
  [
    check("title").not().isEmpty().trim(),
    check("description").isLength({ min: 5 }).trim(),
    check("address").not().isEmpty().trim(),
  ],
  PlacesController.createPlace
);
router.patch(
  "/:pid",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  PlacesController.updatePlace
);
router.delete("/:pid", PlacesController.deletePlace);

module.exports = router;
