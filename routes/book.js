const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book");

router.get("/", bookController.index);

module.exports = router;
