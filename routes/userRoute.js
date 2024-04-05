const express = require('express')
const router = express.Router()

// authentication  middleware
const authMiddleware = require("../middleWare/authMiddleWare")



// user controllers
const { register, login, checkUser } = require("../controller/userController");


// register route
router.post("/register", register);

// login user
router.post("/login", login);
router.get("/",()=> res.send("its working"))
// check user
router.get("/check",authMiddleware,checkUser);

module.exports = router;