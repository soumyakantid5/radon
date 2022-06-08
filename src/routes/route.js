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
router.get("/getUsersList/:id", BookController.getUsersList)
router.get("/authorAgeAndRating",UserController.authorAgeAndRating)

router.get("/books_by_id/:id", UserController.books_by_id)

module.exports = router;