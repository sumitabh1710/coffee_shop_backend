const express = require("express");
const router = express.Router();
const CoffeeShop = require("../models/coffeeShop");
const coffeeShopSchema = require("../dto/shopAddRequestDto");

router.get("/", async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.find();
    res.json(coffeeShops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const { error } = coffeeShopSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const coffeeShop = new CoffeeShop({
    name: req.body.name,
    location: req.body.location,
    rating: req.body.rating,
    images: req.body.images,
    products: req.body.products,
  });

  try {
    const newCoffeeShop = await coffeeShop.save();
    res.status(201).json(newCoffeeShop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findById(req.params.id);
    res.json(coffeeShop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
