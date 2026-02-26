// backend/routes/orders.js

const express = require("express");
const router = express.Router();

let orders = [];

// Place order
router.post("/", (req, res) => {
    orders.push(req.body);
    res.json({ message: "Order placed" });
});

module.exports = router;