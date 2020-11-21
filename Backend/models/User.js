const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },

  role: { type: String },
  city: { type: String },
  country: { type: String },
  postalCode: { type: String },
  adresse: { type: String },
});

module.exports.User = mongoose.model("user", userSchema);
