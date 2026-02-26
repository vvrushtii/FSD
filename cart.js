// backend/routes/cart.js

const express = require("express");
const router = express.Router();

let cart = [];

// Get cart
router.get("/", (req, res) => {
    res.json(cart);
});

// Add to cart
router.post("/", (req, res) => {
    cart.push(req.body);
    res.json({ message: "Added to cart" });
});

// Remove item
router.delete("/:id", (req, res) => {
    cart.splice(req.params.id, 1);
    res.json({ message: "Item removed" });
});

module.exports = router;