const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const app = express();

app.use(parser.json());
app.use(cors());

require("./config/passport")(passport);
app.use(passport.initialize());

app.use("/api/user", require("./routes/user"));
app.use(
  "/api/book",
  passport.authenticate("jwt", { session: false }),
  require("./routes/book")
);
app.use("/api/comment", require("./routes/comment"));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () =>
  console.log(`Server listening on port ${app.get("port")}`)
);
