//const { count } = require("console")
const BookModel= require("../models/bookModel")
const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksDataByAuthor= async function (req, res) {
let data= await UserModel.findOne({author_name:"Chetan Bhagat"})
let id=data.author_id
let allBooks=await BookModel.find({author_id:1}).select({name:1,_id:0})
    res.send({msg:allBooks})
}

const getAuthorAndUpdatePrice= async function (req, res) {
    let data= await BookModel.findOneAndUpdate({name:"Two states"},{price:100},{new:true})
    let id=data.author_id
    let author=await UserModel.findOne({author_id:id})
    let str="Author Name is "+author.author_name+" & Price Of Book Is Updated to "+data.price
      res.send({'msg':str})
    }


    const getUsersList= async function (req, res) {
    let data= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
         let arr=[]
         for(let i=0;i<data.length;i++){
         let author=await UserModel.find({author_id:data[i].author_id}).select({author_name:1,_id:0})
         arr.push(author)
         }
         res.send({arr})
        }
        
module.exports.createBook= createBook
module.exports.getBooksDataByAuthor= getBooksDataByAuthor
module.exports.getAuthorAndUpdatePrice=getAuthorAndUpdatePrice
module.exports.getUsersList=getUsersList