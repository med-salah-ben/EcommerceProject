const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const user = require("./routes/user");
const Products = require("./routes/Products");
const Panier = require("./routes/Panier");
const Order = require("./routes/Order");

app.use(express.json());

connectDB();
app.use("/", user);
app.use("/", Products);
app.use("/", Panier);
app.use("/", Order);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error : console.log(`server is running on port ${PORT} ⚓ `)
);
