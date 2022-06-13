const { count } = require("console")
const orderModel=require('../models/orderModel') 
const productModel= require("../models/productModel")
const userModel= require("../models/userModel")

const purchaseOrder= async function (req, res) {
    let uid=req.body.userId
    let pid=req.body.productId
    
    if(await userModel.findById(uid) && await productModel.findById(pid))
    {
      let status=req.headers.isfreeappuser
   
        if(status==='true')
        {      //TRUE
         console.log("True block")
            let data=req.body
            data.amount=0
        let savedData= await orderModel.create(data).
        res.send({'msg':savedData})
        }
       
        else
        {                               //FALSE
         let completeData=await userModel.findById(req.body.userId).select({balance:1,_id:0})
         if(req.body.amount<=completeData.balance)
         { 
            
            console.log(completeData.balance)
            console.log("False block")
            let data=req.body
            console.log(data.amount)
            let remBalance=completeData.balance-data.amount
            console.log(remBalance)
            console.log(userModel.balance)
            let x=await userModel.updateOne({balance:{$gt:0}},{$set:{balance:remBalance}},{$new:true})
            let savedData= await orderModel.create(data)
            res.send({'msg':savedData})
         }
         else
         {
            res.send({'msg':"you do not have sufficient balance"})
         }
          
        }
    }

 else{
    res.send({'msg':"IDs are not valid"})
 }
}

module.exports.purchaseOrder= purchaseOrder
