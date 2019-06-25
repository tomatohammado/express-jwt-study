const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(parser.json());
app.use(cors());

const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", require("./routes/user"));
app.use(
  "/api/books",
  passport.authenticate("jwt", { session: false }),
  require("./routes/book")
);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () =>
  console.log(`Server listening on port ${app.get("port")}`)
);
