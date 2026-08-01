const { apiResponse } = require("../utilities/apiResponse");
const { asyncHandler } = require("../utilities/asyncHandler");
const categorySchema = require("../model/category.model");
const fs = require('fs')
const path = require('path')


const addCategory = asyncHandler(async (req, res, next) => {

    const { name} = req.body
    const { filename } = req.file
    console.log(req.file)

    console.log(`${process.env.SERVER_URL}/${filename}`)

    const category = new categorySchema({
        name,
        image:`${process.env.SERVER_URL}/${filename}`
    })

    await category.save()
    
    apiResponse(res, 200, "Category added successfully",category )
})

const deleteCategory = asyncHandler(async (req,res)=>{
    
})


module.exports = { addCategory }