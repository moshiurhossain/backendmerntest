const mongoose = require("mongoose");
const { Schema } = mongoose;



const foodSchema = new Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        trim:true,
    },
    description:{
        type:String,
        required:[true, "Description is required"],
        trim:true,
    },
    price:{
        type:Number,
        required:[true, "Price is required"],
        trim:true,
    },
    image:{
        type:String,
        required:[true, "Image is required"],
        trim:true,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"category",
        required:[true, "Category is required"],
        trim:true,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"review",
            default:[],
        },
    ],
    slug:{
        type:String,
        required:[true, "Slug is required"],
        trim:true,
    },

},{timestamps:true,versionKey:false})


module.exports = mongoose.model("food", foodSchema)