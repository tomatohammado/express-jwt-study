const express = require("express");
const router = express.Router();
const passport = require("passport");
const commentController = require("../controllers/comment");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  commentController.index
);

module.exports = router;
