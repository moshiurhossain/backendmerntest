const express = require("express");
const { addReview } = require("../../controllers/reviewControllers");
const router = express.Router();

// http://localhost:8080/api/v1/review/addreview
router.post('/addreview',addReview)
module.exports = router;