const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
	balance:{
        type: Number,
        default:100
    }, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender: {
        type: String,   //// Allowed values are - “male”, “female”, “other”
        enum:['male','female','other']
    },

	/*isfreeappuser: {
        type:Boolean,
        default:false
    }*/ // Default false value.
   
}, { timestamps: true });

module.exports = mongoose.model('UserModel', userSchema) //users
