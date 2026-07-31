const mongoose = require("mongoose");
const { Schema } = mongoose;



const foodSchema = new Schema({

},{timestamps:true,versionKey:false})


module.exports = mongoose.model("food", foodSchema)