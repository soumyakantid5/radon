const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
try{
  let data = req.body;
  let user = await userModel.findOne({ emailId: req.body.emailId });
    if(!user){
    let savedData = await userModel.create(data);
    res.send({ "Registration Successful": savedData });
    }
    else
   res.status(409).send("User already exists...Try to login instead.");
}
catch(err){
  console.log("This is the error in createBook API :\n", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  try{
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({
      status: false,
      msg: "username or the password is not corerct...Try again",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ "Token Generated": true, token: token });
  }
  catch(error){
    console.log("This is the error in login API :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const getUserData = async function (req, res) {
  try{
  //let userId = req.params.userId;
  let userDetails = await userModel.findById(req.params.userId);
  //if (!userDetails)
    //return res.status(403).send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
  }
  catch(error){
    console.log("This is the error in getUserData API :", error.message)
    res.status(500).send({ msg: "Error", error: error.message })
  }
};

const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  //let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
 /*  if (!user) {
    return res.status(403).send("No such user exists");
  } */

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:userData},{new:true});
  res.send({ "Record Updated":updatedUser });
}
catch(error){
  console.log("This is the error in updateUser API :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};

const createPost = async function (req, res) {
  try{
  let uid=req.params.userId
  let msg=req.body.post
  let data=await userModel.findById(uid)
  
  let updatePost=data.post
  updatePost.push(msg)
  let updateUser=await userModel.findOneAndUpdate({_id:uid},{post:updatePost},{new:true})
  res.send({status: true, data: updateUser})
  }
  catch(error){
    console.log("This is the error in createPost API :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

const deleteUser=async function(req,res){
try{
    let userId = req.params.userId;
    //let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    /* if (!user) {
      return res.status(403).send("No such user exists");
    } */
    let deletedUser=await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true});
      res.send({msg:"Record Deleted"})
  }
  catch(error){
    console.log("This is the error in delete API :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

module.exports={createUser,loginUser,getUserData,updateUser,createPost,deleteUser}

