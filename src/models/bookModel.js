const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String ,required:true, unique:true,},
    authorName: String,
    
    category: {
        type: String,
        enum: ["horror", "mystery", "romance","fiction","detective","mythology","action","adventure","scifi","sci-fi","scientific","biography","autobiograpghy","other"] 
    },
    year: Number,   
}, 
{ timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books
