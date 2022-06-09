const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name:String,
author:{
    type:ObjectId,
    ref:'SoumyasAuthor'
},
price:Number,
ratings:Number,
publisher: {
    type:ObjectId,
    ref:'SoumyasPublisher'
},
isHardCover:{
    type:Boolean,
    default:false
}
}, 
{ timestamps: true });

module.exports = mongoose.model('SoumyasBook', bookSchema)
