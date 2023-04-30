import jwt from "jsonwebtoken"
const { User } = require("@/models/userModel")

const isAuthenticate =async (req)=>{
    const cookie = req.headers.cookie
    if(!cookie) return null
    const token = cookie.split("=")[1]
    const decoded = jwt.verify(token,process.env.MY_SECRET)
    return await User.findById(decoded.id)
}

export default isAuthenticate