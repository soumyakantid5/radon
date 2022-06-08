const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const books_by_id= async function (req, res) {
    let id=req.params.id
    let data=await BookModel.find({author_id:id}).select({name:1,_id:0})
    res.send(data)
}
const authorAgeAndRating=async function(req,res){
   let arr=[],id,details
   let grades=await BookModel.find({ratings:{$gt:4}}).select({author_id:1,_id:0})
   for(let i=0;i<grades.length;i++){
    id= await UserModel.find({$and:[{age:{$gt:50}},{author_id:grades[i].author_id}]})
    if(id.length){
    details=id[i].author_name+' '+id[i].age
    arr.push(details)
    } 
   }
   res.send(arr)
}
module.exports.authorAgeAndRating=authorAgeAndRating
module.exports.books_by_id=books_by_id
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData