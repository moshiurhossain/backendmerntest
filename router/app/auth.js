const express = require("express");
const { userRegistration, userLogin } = require("../../controllers/authControllers");
const router = express.Router();


//http://localhost:8080/api/v1/auth

// http://localhost:8080/api/v1/auth/registration
router.post('/registration',userRegistration)

// http://localhost:8080/api/v1/auth/login
router.post('/login',userLogin)

module.exports = router;