const Comment = require("../db/models/Comment");

module.exports = {
  index: (req, res) => {
    Comment.find({}).then(comments => res.json(comments));
    res.json({ test: "yes" });
  }
};
