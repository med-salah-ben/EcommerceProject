const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("config");

const secretOrKey = config.get("secretOrKey");

module.exports = userController = {
  register: async (req, res) => {
    const {
      email,
      name,
      password,
      phone,
      role,
      city,
      country,
      postalCode,
      adresse,
    } = req.body;
    try {
      const searchResult = await User.findOne({ email });
      if (searchResult)
        return res.status(400).json({ errors: "user already exist " });
      const newUser = new User({
        email,
        name,
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
          newUser.password = hash;
          try {
            const addresult = await newUser.save();
            res.status(201).json(addresult);
          } catch (error) {
            res.status(500).json({ errors: error });
          }
        });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const searchResult = await User.findOne({ email });
      if (!searchResult)
        return res
          .status(400)
          .json({ errors: "Bad credentials, check your email" });
      const isMatch = await bcrypt.compare(password, searchResult.password);
      if (!isMatch)
        return res.status(400).json({ errors: "Please check your password" });
      const payload = {
        id: searchResult._id,
        name: searchResult.name,
        email: searchResult.email,
        phone: searchResult.phone,
        role: searchResult.role,
        // city: searchResult.city,
        // country: searchResult.country,
        // postalCode: searchResult.postalCode,
        // adresse: searchResult.adresse,
      };
      jwt.sign(payload, secretOrKey, (err, token) => {
        if (err) throw err;
        res.json({
          token: `Bearer ${token}`,
          id: payload.id,
          role: payload.role,
        });
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
