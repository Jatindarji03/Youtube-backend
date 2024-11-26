import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema=new mongoose.Schema(
    {
        userName:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true
        },
        avatar:{
            type:String,//cloudinary URL 
            required:true
        },
        coverImage:{
            type:String
        },
        watchHistory:[
            {
                type:mongoose.Schema.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'Password is required']
        },
        refershToken:{
            type:String
        }

},{
    timestamps:true
})

userSchema.pre("save", async function(next){
    if(!this.password.isModified('password')) return next()

    this.password=bcrypt.hash(this.password,12);
    next()
})

userSchema.methods.isPassword=async function (password){
     return await bcrypt.compare(password,this.password)
}

export const userModel=mongoose.model("User",userSchema);