const express = require("express");
const { addOrder } = require("../../controllers/orderControllers");
const router = express.Router();

// http://localhost:8080/api/v1/order/addorder
router.post('/addorder',addOrder)

module.exports = router;
