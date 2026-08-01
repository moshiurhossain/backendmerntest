const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:[true, "User is required"],
    },
    foodId:{
        type:Schema.Types.ObjectId,
        ref:"food",
        required:[true, "Food is required"],
    },
    comment:{
        type:String,
        required:[true, "Comment is required"],
    },
    rating:{
        type:Number,
        min:[0, "Rating must be at least 0"],
        max:[5, "Rating must be at most 5"],
        required:[true, "Rating is required"],
    },

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("review", reviewSchema)