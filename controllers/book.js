const Book = require("../db/models/Book");

module.exports = {
  index: (req, res) => {
    Book.find({}).then(books => res.json(books));
    // console.log(req);
    // res.json({ test: "yes" });
  }
};
