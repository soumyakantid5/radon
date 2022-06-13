const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")


const freeAppChecker= function ( req, res, next) {
   if(req.headers.isfreeappuser===undefined)
    {  
        res.send({'msg':"Enter If You are FreeAppUser or not ! "})
    }
    else{
        next()
    }
}

router.post("/createUser",freeAppChecker, UserController.createUser)
router.post("/createProduct", ProductController.createProduct)
router.post("/purchaseOrder", freeAppChecker,OrderController.purchaseOrder)


module.exports = router;