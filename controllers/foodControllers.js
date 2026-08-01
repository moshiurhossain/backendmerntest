const { asyncHandler } = require("../utilities/asyncHandler");
const foodSchema = require("../model/food.model");
const { apiResponse } = require("../utilities/apiResponse");
const fs = require('fs')
const path = require('path');
const slugGenerator = require("../utilities/slugGenerator");

const addFood = asyncHandler(async (req, res, next) => {
    const { name, description, price, category } = req.body
    const { filename } = req.file
    const image = `${process.env.SERVER_URL}/${filename}`
    console.log(image)
    if(!name || !description || !price || !category) return apiResponse(res,404,'You must enter all information')
    
    const slug = slugGenerator(name)
    
    const food = new foodSchema({
      name,
      description,
      price,
      image,
      category,
      slug,
    })  
    await food.save()
    apiResponse(res, 200, "Food added successfully",food )
})

const getAllFood = asyncHandler(async (req, res, next) => {
 const allFoods = await foodSchema.find()   
 apiResponse(res, 200, "Foods fetched successfully",allFoods ) 
})

const deleteFood = asyncHandler(async (req, res, next) => {
    const {slug} =req.params
    const food = await foodSchema.findOneAndDelete({slug})
    if(food){
    const folderpath = path.join(__dirname,'../uploads')
    console.log(folderpath)
    const filepath =food.image.split('/').pop()
    console.log(filepath)
    const filedelete =`${folderpath}/${filepath}`

      fs.unlink(filedelete,(err)=>{
               if(err){
                  console.log(res,500, err.message || 'something wentwrong')
               }else{  
                  console.log(`picture deleted ${filedelete}`)
               }
           })
    
    await foodSchema.deleteOne({slug})       
    apiResponse(res, 200, "Food deleted successfully" )
    }else{
        return apiResponse(res,404,'Food does not exist')
    }
    
})


module.exports = { addFood, getAllFood }