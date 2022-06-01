const express = require('express');
const logger_module = require('../logger/logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    logger_module.welcome()
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason