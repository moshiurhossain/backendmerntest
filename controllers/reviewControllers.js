const { apiResponse } = require("../utilities/apiResponse");
const { asyncHandler } = require("../utilities/asyncHandler");
const userSchema = require("../model/auth.model");
const foodSchema = require("../model/food.model");
const reviewSchema = require("../model/review.model");

const addReview = asyncHandler(async (req, res, next) => {
    // get data
    const {user,foodId,comment,rating} = req.body
    // validation
    if(!user || !foodId || !comment || !rating) return apiResponse(res,404,'You must enter all information')
    // look for existing user
    const existingUser = await userSchema.findById(user)
    // check if user exists
    if(!existingUser) return apiResponse(res,404,'User does not exist')
    // create review
    const review = new reviewSchema({
        user,
        foodId,
        comment,
        rating,
        
    }) 
    // save review
    await review.save()
    // add review to food
    const food = await foodSchema.findOneAndUpdate({_id:foodId},{$push:{reviews:review._id}},{new:true},{ returnDocument: 'after'},)
    
    await food.save()


    apiResponse(res, 200, "Review added successfully")
})

module.exports = { addReview }