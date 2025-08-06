import mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:'../config.env'});

export const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.mongoURI)
    }catch(error){
        console.log({message:error.message})
    }
}