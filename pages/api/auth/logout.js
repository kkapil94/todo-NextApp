import { errorHandler } from "@/middlewares/error";
import { serialize } from "cookie";

const logout = async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "only GET requests are allowed");
    res.setHeader("Set-Cookie",serialize("token",null,{
        path:"/",
        httpOnly:true,
        maxAge: 0
    }))
    res.status(200).json({
        sucsess:true,
        message:"Logged out"
    })
};
export default logout;
