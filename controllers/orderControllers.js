const { apiResponse } = require("../utilities/apiResponse")
const { asyncHandler } = require("../utilities/asyncHandler")

const addOrder = asyncHandler(async (req, res, next) => {
    
    const {user,phone,address} = req.body
    if(!user || !phone || !address) return apiResponse(res,404,'You must enter all information')

    const cartdata = await cartSchema.find({user})
    apiResponse(res, 200, "Order added successfully")
})

module.exports = { addOrder }