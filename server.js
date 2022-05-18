// DEPENDENCIES
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

// CONFIGURATION
require("dotenv").config();
const app = express();

// VARIABLES
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// DATABASE
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("connected to mongo: ", MONGO_URI);
});

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads");
});

// Breads
const breadsController = require("./controllers/breads_controller.js");
app.use("/breads", breadsController);

// Users
const usersController = require("./controllers/user_controller.js");
app.use("/users", usersController);

// Bakers
const bakersController = require("./controllers/bakers_controller.js");
app.use("/bakers", bakersController);

// 404 Page
app.get("*", (req, res) => {
  res.send("404");
});

// LISTEN
app.listen(PORT, () => {
  console.log("Listening at port", PORT);
});
