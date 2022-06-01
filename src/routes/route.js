const express = require('express');
const logger_module = require('../logger/logger')
const date_module=require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger_module.welcome()
    date_module.printDate()
    date_module.prinMonth()
    date_module.getBatchInfo();
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason