const mongoose = require("mongoose");

const ShippingSchema = {
  userID: { type: String },
  name: { type: String },
  phone: { type: String },
  adresse: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  date: { type: Date, required: true },
  // nameProduct: { type: String, required: true },
  // size: { type: String },
  // price: { type: Number },
  // productId: { type: String, required: true },
  // quantity: { type: String, required: true },
};

module.exports.ShippingList = mongoose.model("shippingModal", ShippingSchema);
