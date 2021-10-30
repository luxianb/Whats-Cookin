//* DEPENDANCIES
require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3002;
console.log("process.env.PORT: ", PORT)

//*CONFIGURATION
const app = express();
const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/whatsCookin";
mongoose.connect(MONGODB_URI);
mongoose.connection.once("open", () => {
    console.log("connected to mongoose..." + MONGODB_URI);
});

//* MIDDLEWARE
//!when react submits a form, its passed as JSON data so if it was express.urlencoded (like in express), it will come back as empty/error 
app.use(express.json())

//* Routes
const recipesController = require("./controllers/recipes");
app.use("/api/recipes", recipesController);

//? Test
app.get("/", (req, res) => {
  res.send("IT WORKS")
});

app.listen(PORT, () => {
  console.log(`Whats Cookin listening at http://localhost:${PORT}`);
});