const mongoose = require("mongoose");
const { Schema } = mongoose;



const orderSchema = new Schema({

},{timestamps:true,versionKey:false})


module.exports = mongoose.model("order", orderSchema)