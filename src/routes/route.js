const express = require('express');

const router = express.Router();
const movies_arr=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
router.get('/movies', function(req, res){
    res.send(movies_arr)
})

router.get('/movies/:indexNumber', function(req, res){
   // console.log(JSON.stringify(req.params.indexNumber))
   if(req.params.indexNumber>0 && req.params.indexNumber<=movies_arr.length)
    res.send(movies_arr[req.params.indexNumber-1])
    else
    res.send("Please Enter a Valid Index Number")
})

const films=[ {
    'id': 1,
    'name': 'The Shining'
    }, {
    'id': 2,
    'name': 'Incendies'
    }, {
    'id': 3,
    'name': 'Rang de Basanti'
    }, {
    'id': 4,
    'name': 'Finding Nemo'
    }]
router.get('/films',function(req,res){
    res.send(films)
});

router.get('/films/:filmId',function(req,res){
    if(req.params.filmId>0 && req.params.filmId<=films.length)
    res.send(films[req.params.filmId-1])
    else
    res.send('No movie exists with this id')
});

module.exports = router;
// adding this comment for no reason
