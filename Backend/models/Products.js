const mongoose = require("mongoose");

const listProductSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  countInStock: { type: String },
  brand: { type: String },
  category: { type: String },
  description: { type: String },
  image: { type: String },
});

module.exports.ListProduct = mongoose.model("listProduct", listProductSchema);
