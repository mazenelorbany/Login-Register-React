const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();
const db = require("./db").DB;
const users = require("./routes/user");

mongoose
  .connect(db)
  
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);

app.get("/", function(req, res) {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
