import mongoose from "mongoose";

const taskSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

mongoose.models = {};
export const Task = mongoose.model("Task",taskSchema)