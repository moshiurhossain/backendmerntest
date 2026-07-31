const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({

},{timestamps:true,versionKey:false})


module.exports = mongoose.model("cart", cartSchema)

