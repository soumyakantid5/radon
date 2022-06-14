const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const validity=require("../middleware/checkings")
const isDeleted=require("../middleware/checkings")
router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", isDeleted.statusChecker ,validity.tokenChecker, userController.getUserData)

router.put("/users/:userId",isDeleted.statusChecker ,validity.tokenChecker, userController.updateUser)

router.delete("/users/:userId",isDeleted.statusChecker ,validity.tokenChecker, userController.deleteUser)

module.exports = router;