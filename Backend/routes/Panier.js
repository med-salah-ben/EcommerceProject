const express = require("express");
const { ListPanier } = require("../models/Panier");

const Router = express();

Router.post("/store", (req, res) => {
  try {
    const {
      size,
      quantity,
      userId,
      productId,
      price,
      etat,
      name,
      image,
      date,
    } = req.body;
    const newPanier = new ListPanier({
      size,
      quantity,
      userId,
      productId,
      price,
      etat,
      name,
      image,
      date,
    });
    const Panier = newPanier.save();
    res.status(201).json({ Panier });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

Router.get("/cart", (req, res) => {
  try {
    const { size, name, quantity, userId, price, etat, image, date } = req.body;
    const newCart = new newPanier({
      size,
      name,
      quantity,
      userId,
      price,
      etat,
      image,
      date,
    });
    const Panier = newPanier.save();
    res.status(201).json({ Panier });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

Router.get("/getusercart/", (req, res) => {
  const { userId } = req.query;
  console.log(req.query);
  ListPanier.find({ userId, etat: "InProgress" })

    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

Router.put("/confirm/:_id", (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  ListPanier.findOneAndUpdate(
    { _id },
    { $set: { etat: "confirm", date: Date.now() } }
  )
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

Router.get("/getconfirmitem/", (req, res) => {
  const { userId } = req.query;
  console.log(req.query);
  ListPanier.find({ userId, etat: "confirm" })

    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

Router.get("/getallconfirmitem/", (req, res) => {
  ListPanier.find({ etat: "confirm" })

    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

Router.delete("/deleteItem/:_id", (req, res) => {
  const { _id } = req.params;
  ListPanier.findByIdAndRemove({ _id })
    .then((Panier) => res.send(Panier))
    .catch((err) => console.log(err));
});

Router.delete("/deleteFromOrder/:_id", (req, res) => {
  const { _id } = req.params;
  ListPanier.findByIdAndRemove({ _id })
    .then((Panier) => res.send(Panier))
    .catch((err) => console.log(err));
});

module.exports = Router;
