import { errorHandler } from "@/middlewares/error";
import {User }from "@/models/userModel";
import connect from "@/utils/mongodb";
import { Token } from "@/utils/webtoken";
import bcrypt from "bcrypt"

const register = async (req,res)=>{
    if(req.method !== "POST") return errorHandler(res,400,"only POST requests are allowed")
    const {name,email,password} = req.body;
    if(!name || !email || !password) return errorHandler(res,400,"all fields are mandatory")
    await connect()
    let user =await User.findOne({email});
    if(user) return errorHandler(res,400,"User is already exist with this email");
    const hash = bcrypt.hashSync(password, 10);
        user =await User.create({name,email,password:hash})
        Token(res,user)
        res.status(200).json({success:true,msg:"Registered Successfully"})
}
export default register