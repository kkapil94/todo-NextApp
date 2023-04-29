export const errorHandler = (res,statusCode=500,msg="intrenal server error")=>{
   return res.status(statusCode).json({success:false,msg})
}