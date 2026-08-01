const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
user:{
    type:Schema.Types.ObjectId,
    ref:"user",
    required:[true, "User is required"],
    trim:true,
},
foodId:{
    type:Schema.Types.ObjectId,
    ref:"food",
    required:[true, "Food is required"],
    trim:true,
},
quantity:{
    type:Number,
    required:[true, "Quantity is required"],
    trim:true,
},
totalPrice:{
    type:Number,
    required:[true, "Total price is required"],
    trim:true,
},
},{timestamps:true,versionKey:false})


module.exports = mongoose.model("cart", cartSchema)

