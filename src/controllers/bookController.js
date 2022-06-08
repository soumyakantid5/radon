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
         
         let arr=[],newArr=[],x
         for(let i=0;i<data.length;i++){
         arr.push(data[i]["author_id"])
         }
         console.log(arr)

    let nameData1=await UserModel.find({author_id:arr[0]}).select({author_name :1,_id:0})
    let nameData2=await UserModel.find({author_id:arr[1]}).select({author_name :1,_id:0})
    let nameData3=await UserModel.find({author_id:arr[2]}).select({author_name :1,_id:0})
    let nameData4=await UserModel.find({author_id:arr[3]}).select({author_name :1,_id:0})
    let nameData5=await UserModel.find({author_id:arr[4]}).select({author_name :1,_id:0})
   // console.log(nameData)
       
        res.send({'msg':nameData1,nameData2,nameData3,nameData4,nameData5})
        }
        
module.exports.createBook= createBook
module.exports.getBooksDataByAuthor= getBooksDataByAuthor
module.exports.getAuthorAndUpdatePrice=getAuthorAndUpdatePrice
module.exports.getUsersList=getUsersList