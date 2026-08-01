const mongoose = require("mongoose");
const { Schema } = mongoose;



const orderSchema = new Schema({
user:{
 type:Schema.Types.ObjectId,
 ref:"user",
 required:[true, "User is required"],
 trim:true,    
},
phone:{
 type:String,
 required:[true, "Phone is required"],
 trim:true,
},
address:{
    type:String,
    required:[true, "Address is required"],
    trim:true,
},
items:[{
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
    ItemPrice:{
        type:Number,
        default:0,
    },
    
}],

totalItemPrice:{
    type:Number,
    required:[true, "Total item price is required"],
    trim:true,
},


},{timestamps:true,versionKey:false})


module.exports = mongoose.model("order", orderSchema)