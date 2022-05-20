const express = require("express");
const users = express.Router();
const User = require("../models/user.js")

// INDEX:
users.get("/", async (req, res) => {
    res.render("user", {
      users: "Name",
      title: "User Page",
    });
  });


// SHOW
users.get("/:id", (req, res) => {
    User.findById(req.params.id)
      .populate("baker")
      .then((foundUser) => {
        res.render("show", {
          bread: foundUser,
        });
      })
      .catch((err) => {
        res.send("404");
      });
  });



module.exports = users;