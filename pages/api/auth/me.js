import isAuthenticate from "@/utils/isAuthenticate"

 const me = async (req,res)=>{
    const user =await isAuthenticate(req)
    console.log(user);
    res.status(200).json({
        success:true,user
    })
}

export default me