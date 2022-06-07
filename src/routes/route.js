const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookController= require("../controllers/bookController")



router.post("/createBookRecord", bookController.createBook  )
router.get("/getBookRecord", bookController.getBookList )
router.post("/getBooksInYear", bookController.getBooksInYear  )
router.get("/getXINRBooks", bookController.getXINRBooks )
router.get("/getRandomBooks", bookController.getRandomBooks )
router.post("/getParticularBooks", bookController.getParticularBooks )

module.exports = router;