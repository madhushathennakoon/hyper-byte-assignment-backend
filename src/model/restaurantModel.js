const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    // address: {
    //   addressLine: { type: String, required: true },
    //   state: { type: String, required: true },
    //   country: { type: String, required: true },
    //   zipCode: { type: String, required: true },
    // },

    telephone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("restaurants", restaurantSchema);
