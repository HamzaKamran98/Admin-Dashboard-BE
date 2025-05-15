const express = require("express");
const router = express.Router();
const { sales } = require("../data/sales");

router.get("/", (req, res) => {
  res.json(sales);
});

router.post("/", (req, res) => {
  const newSale = { ...req.body, date: new Date().toISOString().slice(0, 10) };
  sales.push(newSale);
  res.status(201).json(newSale);
});

module.exports = router;
