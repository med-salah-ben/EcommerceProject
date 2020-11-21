const express = require("express");
const userController = require("../controllers/user.controller");
const Router = express();
const { registerRules, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/passport-setup");
const { User } = require("../models/User");
const bcrypt = require("bcryptjs");

Router.post("/register", registerRules(), validator, userController.register);
Router.post("/login", userController.login);
Router.get("/home", isAuth(), (req, res) => res.json(req.user));
Router.get("/user/:_id", (req, res) => {
  const { _id } = req.params;

  User.find({ _id })
    .then((Users) => res.send(Users))
    .catch((err) => console.log(err));
});

Router.get("/allusers", (req, res) => {
  User.find()
    .then((Users) => res.send(Users))
    .catch((err) => console.log(err));
});

Router.delete("/deleteUser/:_id", (req, res) => {
  const { _id } = req.params;
  User.findByIdAndDelete({ _id })
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

Router.post("/addadmin", registerRules(), validator, async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      role,
      city,
      country,
      postalCode,
      adresse,
    } = req.body;
    const admin = new User({
      name,
      email,
      password,
      phone,
      role,
      city,
      country,
      postalCode,
      adresse,
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw err;
        admin.password = hash;
        try {
          const newAdmin = await admin.save();
          res.send(newAdmin);
        } catch (error) {
          res.send({ msg: error.message });
        }
      });
    });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

module.exports = Router;
