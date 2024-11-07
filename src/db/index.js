import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connection=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongo db is connected ${connection}`)
    } catch (error) {
        console.error("Mongo DB Connection Error ",error);
        throw error;
    }
}   

export default connectDB;