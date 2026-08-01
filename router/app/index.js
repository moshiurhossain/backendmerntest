const express = require("express");
const router = express.Router();

// http://localhost:8080/api/v1/auth
router.use('/auth',require('./auth'))

// http://localhost:8080/api/v1/category
router.use('/category',require('./category'))

// http://localhost:8080/api/v1/order
router.use('/order',require('./order'))

// http://localhost:8080/api/v1/food
router.use('/food',require('./food'))

// http://localhost:8080/api/v1/cart
router.use('/cart',require('./cart'))

// http://localhost:8080/api/v1/review
router.use('/review',require('./review'))

module.exports = router;