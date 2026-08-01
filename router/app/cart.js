const express = require("express");
const { addToCart } = require("../../controllers/cartControllers");
const router = express.Router();

// http://localhost:8080/api/v1/cart/addcart
router.post('/addcart',addToCart)

module.exports = router;