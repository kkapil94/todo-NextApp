import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false,
        minLength:[6,"password too short"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }


})
mongoose.models = {};

export const User = mongoose.model("User",userSchema)