import mongoose, { Schema } from "mongoose";

const productSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    imagePublicId:{
        type:String,
        required:true
    },
},{timestamps:true})

const Product=new mongoose.model("Product",productSchema)

export default Product