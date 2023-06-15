const express=require("express")
const { authentication } = require("../middleware/authenticate.middleware")

const productRoute=express.Router()

productRoute.get("/",authentication ,(req,res)=>{
    try{
        console.log("products goes here")
        res.send("Products Data is here 😜")
    }catch(err){
        res.send("not found")
    }
})

module.exports={productRoute}
