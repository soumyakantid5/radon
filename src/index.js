const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment=require('moment')
const app = express();
let today=moment()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mid1=function (req, res, next) {
  console.log(today.format('YYYY-MM-DD  HH:mm:ss '))
  console.log(req.ip)
  console.log(req.path)
  next();}

app.use (mid1);

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
