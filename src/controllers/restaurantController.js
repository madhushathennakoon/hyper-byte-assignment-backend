const restaurantModel = require("../model/restaurantModel");
const mongoose = require("mongoose");
const {
  createRestaurantSchema,
  updateRestaurantSchema,
} = require("../helpers/validation_schema");

//Create new restaurant
const createNewRestaurant = async (req, res) => {
  try {
    // validating request body
    const validateBody = await createRestaurantSchema.validateAsync(req.body);

    const newRestaurant = await restaurantModel.create({
      name: validateBody.name,
      address: validateBody.address,
      telephone: validateBody.telephone,
    });

    res.status(200).json(newRestaurant);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Get all restaurant
const getAllRestaurant = async (req, res) => {
  try {
    const allRestaurant = await restaurantModel.find().sort({ createdAt: -1 });
    res.status(200).json(allRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Update restaurant
const updateRestaurant = async (req, res) => {
  try {
    // validating request body
    const validateBody = await updateRestaurantSchema.validateAsync(req.body);

    const updateRestaurant = await restaurantModel.findByIdAndUpdate(
      req.params.id,
      validateBody,
      {
        new: true,
      }
    );

    res.status(200).json(updateRestaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete restaurant
const deleteRestaurants = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such restaurant" });
    }

    const deleteRestaurant = await restaurantModel.findByIdAndDelete({
      _id: id,
    });

    if (!deleteRestaurant) {
      return res.status(404).json({ error: "No such restaurant" });
    }

    res.status(200).json(deleteRestaurant);
  } catch (error) {
    logger.error(error);
    res.status(400).json({ error: "No such restaurant" });
  }
};

//Get a single restaurant
const getSingleRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such restaurant" });
    }

    const singleRestaurant = await restaurantModel.findById({ _id: id });

    if (!singleRestaurant) {
      return res.status(404).json({ error: "No such restaurant" });
    }

    res.status(200).json(singleRestaurant);
  } catch (error) {
    logger.error(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createNewRestaurant,
  getAllRestaurant,
  updateRestaurant,
  deleteRestaurants,
  getSingleRestaurant,
};
