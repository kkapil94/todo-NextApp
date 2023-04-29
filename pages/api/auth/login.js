const { errorHandler } = require("@/middlewares/error");
const { User } = require("@/models/userModel");
const { default: connect } = require("@/utils/mongodb");
const { Token } = require("@/utils/webtoken");

const login =async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) return errorHandler(res,400,"all fields are mandatory")
    await connect()
    const user =await User.findOne(email);
    if(!user) return errorHandler(res,400,"please enter valid credentials");
     Token(res,200,user)
}