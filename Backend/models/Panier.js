const mongoose = require("mongoose");

const listPanierSchema = new mongoose.Schema({
  size: { type: String, required: true },
  name: { type: String },
  quantity: { type: Number, required: true },
  userId: { type: String },
  price: { type: Number },
  productId: { type: String },
  etat: { type: String },
  image: { type: String },
  date: { type: Date },
});

module.exports.ListPanier = mongoose.model("listPanier", listPanierSchema);
