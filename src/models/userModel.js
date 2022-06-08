const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    author_id:{type:Number,required:true,unique:true},
author_name:{type:String,required:true},
age:{type:Number,required:true},
address:{type:String,required:true}
}, 
{ timestamps: true });

module.exports = mongoose.model('NewAuthor', userSchema) //newauthors


