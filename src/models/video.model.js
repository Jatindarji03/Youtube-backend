import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new mongoose.Schema({
    videoFile:{
        type:String, // URI of Video
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const videoModel=mongoose.model("Video",videoSchema);