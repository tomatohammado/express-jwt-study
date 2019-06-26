const mongoose = require("../connection");

const CommentSchema = new mongoose.Schema({
  content: String
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
