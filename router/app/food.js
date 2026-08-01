const express = require("express");
const { addFood } = require("../../controllers/foodControllers");
const upload = require("../../utilities/upload");
const router = express.Router();


// http://localhost:8080/api/v1/food/addfood
router.post('/addfood',upload.single('foodimage'),addFood)


module.exports = router;