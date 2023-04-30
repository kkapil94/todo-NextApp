import { errorHandler } from "@/middlewares/error";
import { Task } from "@/models/taskModel"
import isAuthenticate from "@/utils/isAuthenticate";
import connect from "@/utils/mongodb"


const mytask =async (req,res)=>{

    if(req.method !== "GET")
    return errorHandler(res,400,"only GET req is allowed");
    await connect()
    const user =await isAuthenticate(req)
    if(!user) return errorHandler(res,400,"Please login first")
    const tasks = await Task.find({user})
    console.log(tasks);
    res.status(200).json({success:true,tasks})
}
export default mytask