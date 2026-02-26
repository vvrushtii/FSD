// backend/routes/users.js

const express = require("express");
const router = express.Router();

let users = [];

// Register user
router.post("/register", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Invalid data" });
    }

    users.push(req.body);
    res.json({ message: "User registered" });
});

module.exports = router;