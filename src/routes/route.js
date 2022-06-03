const express = require('express');
const router = express.Router();

/*

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
*/

let players =
[
{
"name": "manish",
"dob": "1/1/1995",
"gender": "male",
"city": "jalandhar",
"sports": [
"swimming"
]
},
{
"name": "gopal",
"dob": "1/09/1995",
"gender": "male",
"city": "delhi",
"sports": [
"soccer"
]
},
{
"name": "lokesh",
"dob": "1/1/1990",
"gender": "male",
"city": "mumbai",
"sports": [
"soccer"
]
},
]

router.post('/players',function(req,res){

for(let i=0;i<players.length;i++){
    if(players[i]["name"]!==req.body.name)
    {
        players.push(req.body)
        console.log("updated")
        break
    }
    else
    console.log("Duplicate")
   
}
console.log(players)


res.send("done")
});

module.exports = router;