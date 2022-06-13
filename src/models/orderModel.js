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
	isfreeappuser: {
        type:Boolean,
        default:false
    },
	date: {type:Date,
    default:new Date().toISOString().slice(0, 10)
}

}, { timestamps: true });

module.exports = mongoose.model('OrderModel', orderSchema)
