const express = require("express");
const menus = express.Router();
const Menu = require("../models/menu.js");

// SHOW
menus.get("/menu/:name", (req, res) => {
  Menu.find(req.params.name)
    .populate("menu")
    .then((foundMenu) => {
      console.log(Menu);
      res.render("menu", {
        menu: foundMenu,
      });
    })
    .catch((err) => {
      res.send("404");
    });
});

module.exports = menus;
