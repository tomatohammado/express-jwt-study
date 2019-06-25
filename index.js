const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(parser.json());
app.use(cors());

app.use("/api/users", require("./routes/user"));
app.use("/api/books", require("./routes/book"));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () =>
  console.log(`Server listening on port ${app.get("port")}`)
);
