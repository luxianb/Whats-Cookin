//* DEPENDANCIES
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

//*CONFIGURATION
require('dotenv').config()
const app = express()
const port = process.env.PORT ?? 3002;
mongoose.connect(process.env.MONGODB_URI ?? 'mongodb://localhost:27017/whatsCookin')
mongoose.connection.on("open", () => {
  console.log(`Connection to MongoDB ${process.env.MONGODB_URI ? "Atlas" : ""} is open`)
})

// Middleware
app.use(express.json())
app.use(session({ secret: process.env.SECRET, resave: false, saveUninitialized: false }))

// Routes
const sessionController = require('./controllers/session_controller');
app.use('/api/session', sessionController)
const userController = require('./controllers/user');
app.use('/api/user', userController)

//* Recipe Routes
const recipesController = require("./controllers/recipes");
app.use("/api/recipes", recipesController);

app.get('/', (req, res) => {
  res.send("Hello world")
})

// Listerner
app.listen(port, () => {
  console.log(`Express server is live at ${port}`)
})

