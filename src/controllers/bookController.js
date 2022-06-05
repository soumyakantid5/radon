const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBook= async function (req, res) {
    let allBooks= await bookModel.find()
    //res.send({msg: allBooks})
    let arr=[]

    for(let i=0;i<allBooks.length;i++){
    arr.push(allBooks[i].bookName)
    }
    res.send({BookNames:arr})
}

module.exports.createBook= createBook
module.exports.getBook= getBook