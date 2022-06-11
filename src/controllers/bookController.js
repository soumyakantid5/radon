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
    let data=await bookModel.find().populate('author')
    for(i=0;i<data.length;i++){
        if(data[i].author.rating>3.5){
            data[i].price+=11
        }
        else{
                continue
        }
    }
    res.send({'msg':data})
}


const updateBookType=async function(req,res){
    
let data=await bookModel.find().populate('publisher')

for(i=0;i<data.length;i++){
if(data[i].publisher.name==="Penguin"||data[i].publisher.name===" HarperCollins"){
   data[i].isHardCover=true
  // console.log(data[i].publisher.name,' ',data[i].isHardCover)
}
else{
   continue
}
}
res.send({'msg':data})
}

module.exports.createBook= createBook
module.exports.updatePrice= updatePrice
module.exports.getBookDetails = getBookDetails
module.exports.updateBookType=updateBookType
