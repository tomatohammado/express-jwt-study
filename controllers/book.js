const Book = require("../db/models/Book");

module.exports = {
  index: (req, res) => {
    Book.find({})
      .then(books => {
        res.json({ test: "yes" });
      })
      .catch(err => {
        res.status(400).send({ msg: err });
      });
  }
};
