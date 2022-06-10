const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")



router.post("/createAuthor", authorController.createAuthor  )
router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createPublisher", publisherController.createPublisher  )
router.get("/getPublisherData", publisherController.getPublisherData)

router.post("/createBook", bookController.createBook  )
router.get("/getBookDetails", bookController.getBookDetails)

router.put("/updatePrice", bookController.updatePrice)

router.put("/updateBookType", bookController.updateBookType)

module.exports = router;