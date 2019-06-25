const mongoose = require("../connection");

const BookSchema = new mongoose.Schema({
  title: String,
  author: String
});

const Book = mongoose.model("book", BookSchema);

module.exports = Book;
