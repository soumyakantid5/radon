const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const validity=require("../middleware/checkings")


router.post("/users", userController.createUser  )
router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",validity.authenticate,validity.authorise,validity.statusChecker, userController.getUserData)

router.put("/users/:userId",validity.authenticate,validity.authorise, validity.statusChecker, userController.updateUser)

router.post("/users/:userId/post",validity.authenticate,validity.authorise, validity.statusChecker, userController.createPost)

router.delete("/users/:userId",validity.authenticate,validity.authorise, validity.statusChecker, userController.deleteUser)

module.exports = router;