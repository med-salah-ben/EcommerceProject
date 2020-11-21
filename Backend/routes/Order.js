const express = require("express");
const Router = express();
const { ShippingList } = require("../models/Order");

Router.post("/shipping", (req, res) => {
  try {
    const {
      // nameProduct,
      // size,
      // price,
      // productId,
      // quantity,
      adresse,
      city,
      postalCode,
      country,
      userID,
      name,
      phone,
      date,
    } = req.body;
    const shippingModal = new ShippingList({
      // nameProduct,
      // size,
      // price,
      // productId,
      // quantity,
      adresse,
      city,
      postalCode,
      country,
      userID,
      name,
      phone,
      date,
    });
    const newShipping = shippingModal.save();
    res.status(201).json({ newShipping });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

Router.get("/getAllorders", async (req, res) => {
  ShippingList.find()
    .then((order) => res.send(order))
    .catch((err) => console.log(err));
});

module.exports = Router;
