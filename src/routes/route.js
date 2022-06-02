const lodash=require('lodash')
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

router.get('/hello',function(req,res){
const months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
console.log('Single Array Chunked into 4 sub groups by lodash module',lodash.chunk(months,4))

const arr=[1,3,5,7,9,11,13,15,17,19]
console.log('Printing all elements except first element',lodash.tail(arr).toString())
const numarr1=[1,2,3]
const numarr2=[3,5,6]
const numarr3=[2,4,6]
const numarr4=[5,7,1]
const numarr5=[1,6,4,8,9]
console.log('Printing uniques values from all Arrays ',lodash.union(numarr1,numarr2,numarr3,numarr4,numarr5))

const pair1=["horror","The Shining"];
const pair2=["drama","Titanic"]
const pair3=['thriller','Shutter Island']
const pair4=['fantasy','Pans Labyrinth']
console.log("Array converted to object",lodash.fromPairs([pair1,pair2,pair3,pair4]))
res.send('My lodash hello api!')
});

module.exports = router;
// adding this comment for no reason