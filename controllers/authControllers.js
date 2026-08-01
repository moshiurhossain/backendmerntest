const { apiResponse } = require("../utilities/apiResponse");
const { asyncHandler } = require("../utilities/asyncHandler");
const userSchema = require("../model/auth.model");
const { generateOtp, otpExpiryTime } = require("../utilities/allGenerators");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { sendEmailToUser } = require("../utilities/sendEmail");
const otpTemplate = require("../utilities/otpTemplete");



// add-user Controller
exports.userRegistration = asyncHandler(async (req, res, next) => {
   //get data
   const { name, email, password, phonenumber, address } = req.body
   //validation
   if(!name || !email || !password || !phonenumber || !address) return apiResponse(res,404,'You must enter all information')
   //look for existing user
   const existingUser =await userSchema.findOne({email})
   //check if user exists
   if(existingUser) return apiResponse(res,404,'User already exists')
   //generate otp
   const otp = generateOtp()
   //hash password
   const hashedPassword = await bcrypt.hash(password,10)
   //create user
   const user = new userSchema({
       name,
       email,
       password: hashedPassword,
       phonenumber,
       address,
       otp,
       otp_expiry: otpExpiryTime()
   })
   //save user
   await user.save()

   sendEmailToUser(email,"Registration OTP",otpTemplate(name,otp,otpExpiryTime()))



   //send api response    
   apiResponse(res, 200, "User added successfully", user )

})
// login Controller
exports.userLogin = asyncHandler(async (req, res, next) => {

   const { email, password } = req.body
   //validation
   if(!email || !password) return apiResponse(res,404,'You must enter all information')
   //look for existing user
   const existingUser =await userSchema.findOne({email})
   //check if user exists
   if(!existingUser) return apiResponse(res,404,'User does not exist')
   //check if password is correct
   const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
   //check if password is correct
   if(!isPasswordCorrect) return apiResponse(res,404,'Password is incorrect')

    const user ={
       id:existingUser._id, 
       name:existingUser.name,
       email:existingUser.email,
       phonenumber:existingUser.phonenumber,
       address:existingUser.address,
       role:existingUser.role,
    }

    const accesstoken = jwt.sign(userinfo,process.env.PRIVATE_KEY,{expiresIn:'1h'})

   //send api response
    apiResponse(res, 200, "User Logged in successfully",{...user,accesstoken} )

})
    