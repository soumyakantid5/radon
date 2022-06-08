const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get("/getUserData", UserController.getUsersData)
router.post("/createUser", UserController.createUser  )
router.post("/createBook", BookController.createBook  )
router.get("/getBooksDataByAuthor", BookController.getBooksDataByAuthor)
router.get("/getUserData", UserController.getUsersData)
router.get("/getAuthorAndUpdatePrice", BookController.getAuthorAndUpdatePrice)
router.get("/getUsersList", BookController.getUsersList)
module.exports = router;