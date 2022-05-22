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

// // ROUTES
// app.get("/", (req, res) => {
//   res.
//   send("Welcome to an Awesome App about Breads");
// });
// ROUTES FOR TESTING
app.get("/new", (req, res) =>{
  res.render('restaurants/new')
})
// MENU
app.get("/menu", (req, res) =>{
  res.render('menu')
})
// Restaurants Controller

const restaurantsController = require('./controllers/restaurants_controller.js')
app.use('/restaurants', restaurantsController)

// Restaurant
app.get("/", (req, res) =>{
  res.render('restaurants/index')
})
// 404 Page


app.get("*", (req, res) => {
  res.send("404");
});

// LISTEN
app.listen(PORT, () => {
  console.log("Listening at port", PORT);
});
