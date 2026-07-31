const express = require("express");
const { addCategory } = require("../../controllers/categoryControllers");
const upload = require("../../utilities/upload");
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const router = express.Router();


// http://localhost:8080/api/v1/category/addcategory
router.post('/addcategory',upload.single('categoryimage'),addCategory)

module.exports = router;