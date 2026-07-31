const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
   
    name:{
        type:String,
        required:[true, "Name is required"],
        trim:true,
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        unique:[true, "Email must be unique"],
        trim:true,
    },
    
    password:{
        type:String,
        required:[true, "Password is required"],
        minlength:[6, "Password must be at least 6 characters long"],
        // select:false,
    },
    phonenumber:{
        type:Number,
        required:[true, "Phone number is required"],
    },
    address:{
        type:String,
        required:[true, "Address is required"], 
    },
    otp:{
        type:Number,
        default:null,
        
    },
    otp_expiry:{
        type:Date,
        default:null
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:["user","admin","superadmin"],
        default:"user",
    },
    forgetPasswordOtp:{
        type:String,
        default:null,
    },
    forgetPasswordOtpExpiry:{
        type:Date,
        default:null
    },  


},{timestamps:true,versionKey:false})


module.exports = mongoose.model("user", userSchema)