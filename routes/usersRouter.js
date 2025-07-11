const express = require("express");
const userModel = require("../models/user-model");
const router = express.Router();
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const { registeredUser , loginUser,logout } = require("../controllers/authController.js");


router.get("/",(req,res)=>{
    res.send("Users Router Working")
})


router.post("/register",registeredUser)

router.post("/login",loginUser)

router.get("/logout",logout)


module.exports = router;