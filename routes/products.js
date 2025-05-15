const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  const newProduct = { ...req.body, id: Date.now() };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
