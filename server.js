const express = require("express");
const path = require("path");
const index = require('./routes/database.js')


let app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", index);


app.listen(3000, () => {
  console.log("Sever is running on http://localhost:3000");
});
