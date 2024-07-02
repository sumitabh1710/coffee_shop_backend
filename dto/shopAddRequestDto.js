const Joi = require('joi');

const coffeeShopSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  rating: Joi.number().min(0).max(5).required(),
  images: Joi.array().items(Joi.string().uri()).required(),
  products: Joi.array().items(Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().valid('Coffee', 'Drinks', 'Food').required()
  })).required()
});

module.exports = coffeeShopSchema;
