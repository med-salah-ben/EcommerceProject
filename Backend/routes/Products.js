const express = require("express");
const Router = express();
const { ListProduct } = require("../models/Products");

Router.get("/getAllProducts", async (req, res) => {
  ListProduct.find()
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
});

Router.post("/addproducts", (req, res) => {
  try {
    const {
      name,
      price,
      countInStock,
      brand,
      category,
      description,
      image,
    } = req.body;
    console.log(req.body);
    const listProduct = new ListProduct({
      name,
      price,
      countInStock,
      brand,
      category,
      description,
      image,
    });
    console.log(listProduct);
    const newProduct = listProduct.save();
    console.log(newProduct);
    res.status(201).json({ newProduct });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

Router.delete("/deleteproduct/:_id", (req, res) => {
  const { _id } = req.params;
  ListProduct.findByIdAndDelete({ _id })
    .then((product) => res.send(product))
    .catch((err) => console.log(err));
});

Router.put("/updateproduct/:_id", (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  const updateProduct = req.body;
  ListProduct.findOneAndUpdate(
    { _id },
    {
      $set: updateProduct,
    }
  )
    .then((Products) => res.send(Products))

    .catch((err) => console.log(err));
});

module.exports = Router;
