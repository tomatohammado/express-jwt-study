const mongoose = require("../connection");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
