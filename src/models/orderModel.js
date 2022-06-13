const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
        type:ObjectId,
        ref:"UserModel",
        require:true
    },
	productId: {
        type:ObjectId,
        ref:"ProductModel",
        require:true
    },
	amount: Number,
	//isFreeAppUser: true, 
	date: {type:Date,
    default:Date.now()
}

}, { timestamps: true });

module.exports = mongoose.model('OrderModel', orderSchema)
