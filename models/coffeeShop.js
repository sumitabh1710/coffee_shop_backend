const mongoose = require('mongoose');

const coffeeShopSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  images: [String],
  products: [
    {
      name: String,
      price: Number,
      category: String,
    },
  ],
});

module.exports = mongoose.model('CoffeeShop', coffeeShopSchema);
