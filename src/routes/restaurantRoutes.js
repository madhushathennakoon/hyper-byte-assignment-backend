const express = require("express");
const {
  createNewRestaurant,
  getAllRestaurant,
  updateRestaurant,
  deleteRestaurants,
  getSingleRestaurant,
} = require("../controllers/restaurantController");

const router = express.Router();

//POST a new restaurant
router.post("/create", createNewRestaurant);

//GET all restaurant
router.get("/getall", getAllRestaurant);

//UPDATE a restaurant
router.patch("/:id", updateRestaurant);

//DELETE a restaurant
router.delete("/:id", deleteRestaurants);

//GET a single restaurant
router.get("/:id", getSingleRestaurant);

module.exports = router;
