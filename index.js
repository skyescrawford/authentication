const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

const User = require("./models/user");
const userRoutes = require("./routes/user");

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("listening on port: 3000");
});
