import mongoose from "mongoose"

const connect = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.MY_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gnmjov6.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{console.log("mongodb is connected");})
    .catch((err)=>console.log(err))
}

export default connect
