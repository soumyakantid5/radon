const express = require('express');
const logger_module = require('../logger/logger.js')
var date_module=require('../util/helper.js')
let validator_module=require('../validator/formatter.js')

const router = express.Router();

router.get('/', function (req, res) {
    logger_module.welcome()
    res.send('My Welcome api!')
});
router.get('/date', function (req, res) {
    date_module.printDate()
    date_module.printMonth()
    date_module.getBatchInfo();
    res.send('My Date api!')
});
router.get('/validator', function (req, res) {
    validator_module.trim("    functionup spaces trimmed")
    validator_module.changetoUpperCase('this is CONVERTED to upper')
    validator_module.changetoLowerCase('THIS IS converted LOWER')
    res.send('My Validator api!')
});

module.exports = router;
// adding this comment for no reason