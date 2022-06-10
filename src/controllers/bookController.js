//const authorModel = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const publisherModel= require("../models/publisherModel")
const bookModel= require("../models/bookModel")
const mongoose = require('mongoose');

const createBook= async function (req, res) {
    let auth_id=req.body.author
    let pub_id=req.body.publisher
    let x=mongoose.isValidObjectId(auth_id) //returns Boolean
    let y=mongoose.isValidObjectId(pub_id)  //true or false
   
   if(req.body.author && req.body.publisher){ 
        if(mongoose.isValidObjectId(auth_id) && mongoose.isValidObjectId(pub_id)){
            if(await authorModel.findById(auth_id) && await publisherModel.findById(pub_id)){
                let bookCreated = await bookModel.create(req.body)
                res.send({data: bookCreated})
            }
                else{
                    res.send({"info1":"ID Not Found in Database"})
                }
        }
        else{
            res.send({"info1":"Not Valid ID"})
        }
    }
    else{
        res.send({"info":"Book Record Not created...You must enter Author ID & Publisher ID"})
    }
}

const getBookDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})
}

const updatePrice= async function (req, res) {
      let arr=[]
      let authorData=await authorModel.find({rating:{$gt:3.5}})
     for(let i=0;i<authorData.length;i++){
         let y=await bookModel.updateMany({author:authorData[i]._id},{$inc:{price:10}})
         let x=await bookModel.find({author:authorData[i]._id})
          arr.push(x)
      }
    res.send({data: arr})
}

module.exports.createBook= createBook
module.exports.updatePrice= updatePrice
module.exports.getBookDetails = getBookDetails
