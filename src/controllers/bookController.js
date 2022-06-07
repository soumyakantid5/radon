const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBookList= async function (req, res) {
    let allBooks= await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {
    let year=req.body.year
    let booksInYear= await bookModel.find({year:year}).select({bookName:1,_id:0})
    res.send({msg: booksInYear})
}

const getXINRBooks= async function (req, res) {
   let listOfBooks= await bookModel.find({["price.indRupee"]:
                {$in:["100INR","200INR","300INR"]}}). select({bookName:1,_id:0})
    res.send({msg: listOfBooks})
}

const getRandomBooks= async function (req, res) {
    let randomBooks= await bookModel.find({$or:[{totalPages:{$gt:500}},{stockAvailable:true}]})
    res.send({msg:randomBooks })
}

const getParticularBooks= async function (req, res) {
    let random=req.body
let x=new RegExp(`${random.bookName}`, "gi") 
let y=new RegExp(`${random.year}`,"gi")
      
       let bookNameCheck= await bookModel.find( {$or:[{ bookName: x },{year:y}]}) 
       res.send({msg:bookNameCheck })
}

module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.getParticularBooks=getParticularBooks