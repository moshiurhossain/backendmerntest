const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({

    image:{
        type:String,
        required:[true, "Image is required"],
      
    },
    name:{
        type:String,
        required:[true, "Name is required"],
        
    }

},{timestamps:true,versionKey:false})

module.exports = mongoose.model("category", categorySchema)