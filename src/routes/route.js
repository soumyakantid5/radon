const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();


router.get("/try-me", function (req, res) {
    res.send("My first ever api!")
})

module.exports = router;