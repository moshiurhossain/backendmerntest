const express = require("express");
const { addFood, getAllFood,deleteFood } = require("../../controllers/foodControllers");
const upload = require("../../utilities/upload");
const router = express.Router();


// http://localhost:8080/api/v1/food/addfood
router.post('/addfood',upload.single('foodimage'),addFood)
// http://localhost:8080/api/v1/food/getallfood
router.get('/getallfood',getAllFood)
// http://localhost:8080/api/v1/food/deletefood/:slug
router.delete('/deletefood/:slug',deleteFood)


module.exports = router;