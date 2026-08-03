const { apiResponse } = require("../utilities/apiResponse");
const { asyncHandler } = require("../utilities/asyncHandler");
const userSchema = require("../model/auth.model");
const foodSchema = require("../model/food.model");
const cartSchema = require("../model/cart.model");

const addToCart = asyncHandler(async (req,res)=>{
   const {user,foodId} = req.body
   if(!user || !foodId) return apiResponse(res,404,'You must enter all information')
   const existingUser = await userSchema.findById(user)
   const existingFood = await foodSchema.findById(foodId)
   if(!existingUser) return apiResponse(res,404,'User does not exist')
   if(!existingFood) return apiResponse(res,404,'Food does not exist')

   const foodPrice = existingFood.price
   const existingCart = await cartSchema.findOne({user,foodId})



   if(existingCart){ 
       existingCart.quantity += 1
     await existingCart.save()
     const existingCartFoodquantity = existingCart.quantity 
     const existingCartFoodPrice = existingCart.totalPrice
     existingCart.totalPrice = existingCartFoodPrice + foodPrice
     await existingCart.save()

     apiResponse(res, 200, "Cart-item quantity increased",existingCart)

    }else{
        const newCart = new cartSchema({
            user,
            foodId,
            quantity:1,
            totalPrice:foodPrice,    
        })
        await newCart.save()
        apiResponse(res, 200, "Added to cart successfully",newCart)
    }
    
  
    
})

module.exports = { addToCart }