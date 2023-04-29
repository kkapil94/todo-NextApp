import { errorHandler } from "@/middlewares/error";
import { Task } from "@/models/taskModel"
import connect from "@/utils/mongodb"


const newtask =async (req,res)=>{

    if(req.method !== "POST")
    return errorHandler(res,400,"only post req is allowed");

    const {title,task} = req.body
    if(!title || !task) return errorHandler(res,400,"all fields are mandatory")
    await connect()
    const newTask = await Task.create({title,task,user:"asajasaksfas"})
    console.log(task);
    res.status(200).json({success:true,newTask})
}
export default newtask