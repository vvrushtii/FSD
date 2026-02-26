// backend/routes/products.js

const express = require("express");
const router = express.Router();

let products = [];

// Get all products
router.get("/", (req, res) => {
    res.json(products);
});

// Add product
router.post("/", (req, res) => {
    const { name, price, image } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: "All fields required" });
    }

    products.push(req.body);
    res.json({ message: "Product added" });
});

module.exports = router;