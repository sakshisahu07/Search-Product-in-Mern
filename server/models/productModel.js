

const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    name:String,
    description:String,
    category:String,
    price:Number
})
module.exports=mongoose.model("productschema",productSchema)