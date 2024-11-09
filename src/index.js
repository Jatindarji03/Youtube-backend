import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})


connectDB().then((result)=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on this port ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log('connection failed ',error)
})