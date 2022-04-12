const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  inStock: Boolean,
});
module.exports = Item;
