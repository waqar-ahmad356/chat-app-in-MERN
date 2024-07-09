import mongoose from "mongoose";


const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://waqar:waqar392936@cluster0.wwykolx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    console.log("Connected DB")
}

export default connectDb