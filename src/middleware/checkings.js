const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

module.exports.tokenChecker=async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) 
    token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) 
    return res.send({ status: false, msg: "Token must be present" });
  
    //console.log("Token = ",token);
    
    let paramsId = req.params.userId;
    let decodedToken = jwt.verify(token, "functionup-radon");
    let userLoggedIn = decodedToken.userId
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
     else if(paramsId!==userLoggedIn)
     res.send({status: false, msg: 'You are not allowed to modify the requested user\'s data'})
    else
     next()
}

module.exports.statusChecker=async function(req,res,next){
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
