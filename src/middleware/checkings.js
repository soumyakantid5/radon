const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
module.exports.tokenChecker=async function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if (!token) 
    token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) 
    return res.send({ status: false, msg: "token must be present" });
  
    console.log("Token = ",token);
  
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    next()
}

module.exports.statusChecker=async function(req,res,next){
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if(!userDetails.isDeleted){
        next()
    }
    else
    res.send("User Deleted")
}
