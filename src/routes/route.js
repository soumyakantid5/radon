const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const validity=require("../middleware/checkings")


router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",validity.tokenChecker, validity.statusChecker, userController.getUserData)

router.put("/users/:userId",validity.tokenChecker, validity.statusChecker, userController.updateUser)

router.delete("/users/:userId",validity.tokenChecker, validity.statusChecker, userController.deleteUser)

module.exports = router;