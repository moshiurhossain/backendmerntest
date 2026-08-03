const { apiResponse } = require("../utilities/apiResponse")
const { asyncHandler } = require("../utilities/asyncHandler")
const cartSchema = require("../model/cart.model")
const orderSchema = require("../model/order.model")

const addOrder = asyncHandler(async (req, res, next) => {
    
    const {user,phone,address} = req.body
    if(!user || !phone || !address) return apiResponse(res,404,'You must enter all information')

    const cartdata = await cartSchema.find({user})

    const items = cartdata.map(item => {
        return {
            foodId:item.foodId,
            quantity:item.quantity,
            totalPrice:item.totalPrice,
        }   
    })

    const totalCartItemPrice = cartdata.reduce((acc, item) => acc + item.totalPrice, 0)

    const order = new orderSchema({
        user,
        phone,
        address,
        items,
        totalItemPrice:totalCartItemPrice,
    })
    await order.save()
    

    apiResponse(res, 200, "Order added successfully",cartdata)
})

module.exports = { addOrder }