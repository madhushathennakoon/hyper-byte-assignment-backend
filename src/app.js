const express = require("express");
const cors = require("cors");
const authRoute = require("../src/routes/userRoutes");
const restaurantRoute = require("../src/routes/restaurantRoutes");

// Express app
const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", authRoute);
app.use("/api/restaurant", restaurantRoute);

module.exports = app;
