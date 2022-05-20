const express = require("express");
const menus = express.Router();
const Menu = require("../models/menu.js");

// SHOW
menus.get("/:id", (req, res) => {
  Menu.findById(req.params.id)
    .populate("menu")
    .then((foundMenu) => {
      // console.log(baker);
      // console.log(foundBread);
      res.render("show", {
        menu: foundMenu,
      });
    })
    .catch((err) => {
      res.send("404");
    });
});

module.exports = menus;
