import { errorHandler } from "@/middlewares/error";
import { Task } from "@/models/taskModel";
const { default: isAuthenticate } = require("@/utils/isAuthenticate");
const { default: connect } = require("@/utils/mongodb")

const handler = async (req,res)=>{
    if(req.method === "PUT"){
        const {title,task} = req.body
        await connect();
        const user = isAuthenticate(req);
        if(!user) return errorHandler(res,400,"Please login first")
        const taskId = req.query.id
        const updTask =await Task.findById(taskId)
        if(!updTask) return errorHandler(res,400,"Task not found")
        updTask.isCompleted = !updTask.isCompleted
        await updTask.save()
        res.status(200).json({success:true,msg:"task updated successfully "})
    }
    else if(req.method === "DELETE"){
        await connect();
        const user = isAuthenticate(req);
        if(!user) return errorHandler(res,400,"Please login first")
        const taskId = req.query.id
        const task =await Task.findById(taskId)
        if(!task) return errorHandler(res,400,"Task not found")
        await task.deleteOne();
        res.status(200).json({success:true,msg:"task delted successfully "})
    }
    else{
        res.status(400).json({success:false,msg:"this method id not available"})
    }
}

export default handler