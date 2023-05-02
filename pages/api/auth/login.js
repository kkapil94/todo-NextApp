import { errorHandler } from "@/middlewares/error";
import { User } from "@/models/userModel";
import connect from "@/utils/mongodb";
import { Token } from "@/utils/webtoken";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "only POST requests are allowed");
  const { email, password } = req.body;
  if (!password || !email)
    return errorHandler(res, 400, "All fields are mandatory");
  await connect();
  const user = await User.findOne({ email }).select("+password");
  if (!user) return errorHandler(res, 400, "Please enter valid credentials");
  console.log(password,user.password);
  const isMatched =await bcrypt.compare(password,user.password);
  console.log(isMatched);
  if(isMatched){
      Token(res, user);
      res.status(200).json({ success: true, msg: "Login Successfully" ,user});
  }
  else return errorHandler(res,400,"Please enter valid credentials")
};
export default login;
