import jwt from "jsonwebtoken"
import { serialize } from "cookie";

export const Token = (res,user) =>{
    const token = jwt.sign({id:user._id},process.env.MY_SECRET);
    res.setHeader("Set-Cookie",serialize("token",token,{
        path:"/",
        httpOnly:true,
        maxAge: 15*24*60*60*1000
    }))
}