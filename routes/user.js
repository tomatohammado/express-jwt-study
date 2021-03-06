const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/signup", userController.signUp);
router.post("/login", userController.logIn);

module.exports = router;
