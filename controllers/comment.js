const Comment = require("../db/models/Comment");

module.exports = {
  index: (req, res) => {
    Comment.find({}).then(comments => res.json(comments));
    // console.log(req);
    res.json({ test: "yes" });
  }
};
