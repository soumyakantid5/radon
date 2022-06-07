const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String ,required:true, unique:true,},
    price:{
        indRupee:String,
        euroRupee:String
    },
    year:{
        type:String,
        default:new Date().getFullYear()
    },
    tags:[String],
    authorName: String,
    totalPages:Number,
    stockAvailable:Boolean
}, 
{ timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books
