const express = require("express");
const userController = require("../controller/userController")
const bodyParser = require("body-parser")
const router = express.Router();
const {verifyToken} = require("../middleware/jwtMiddlewares")

// MIDDLEWARE
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
router.post("/login", userController.loginPost)
router.post("/signup",userController.signupPost)


module.exports = router