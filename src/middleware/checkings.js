const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.authenticate=async function(req,res,next){
    try{
    let token = req.headers["x-Auth-token"];
    if (!token) 
    token = req.headers["x-auth-token"];
    //If no token is present in the request header return error
    if (!token) 
    return res.send({ status: false, msg: "Token must be present" });
    //console.log("Token = ",token);
    else
    next()
    }
    catch(err){
        console.log("This is the error in authenticate API :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
      } 
}
module.exports.authorise=function(req,res,next){
    try{
    let paramsId = req.params.userId;
    let decodedToken = jwt.verify(req.headers["x-Auth-token"]||req.headers["x-auth-token"], "functionup-radon");
    let userLoggedIn = decodedToken.userId
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
     else if(paramsId!==userLoggedIn)
     res.send({status: false, msg: 'You are not allowed to modify the requested user\'s data'})
    else
     next()
    }
    catch(err){
        console.log("This is the error in authorise API :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
      }
}
module.exports.statusChecker=async function(req,res,next){
    try{
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if(userDetails===null)
    res.send("Enter correct User Id")
    else if(userDetails.isDeleted){
        res.send("User Deleted")
    }
    else
    next()
}
catch(err){
    console.log("This is the error in statusChecker API :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}
