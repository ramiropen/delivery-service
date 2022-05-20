const express = require("express");
const restaurants = express.Router();
const restaurant = require("../models/restaurant.js")

// INDEX:
restaurants.get("/", async (req, res) => {
    res.render("restaurant", {
      users: "Name",
      title: "restaurant Page",
    });
  });


// SHOW
restaurants.get("/:id", (req, res) => {
    restaurants.findById(req.params.id)
      .populate("restaurant")
      .then((foundrestaurant) => {
        res.render("show", {
          bread: foundrestaurant,
        });
      })
      .catch((err) => {
        res.send("404");
      });
  });



module.exports = restaurants;