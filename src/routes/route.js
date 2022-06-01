const express = require('express');
const logger_module = require('../logger/logger')
var date_module=require('../util/helper')
let validator_module=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    logger_module.welcome()
    date_module.printDate()
    date_module.prinMonth()
    date_module.getBatchInfo();
    validator_module.trim("    functionup spaces trimmed")
    validator_module.changetoUpperCase('this is CONVERTED to upper')
    validator_module.changetoLowerCase('THIS IS converted LOWER')
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason