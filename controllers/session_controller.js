const express = require('express');
const bcryptjs = require('bcryptjs');
const Users = require("../models/users")

const router = express.Router();

// Fetches Userinfo if logged in
router.get('/', (req, res) => {
  res.json(req.session.loggedUser)
})

// Route to login
router.post('/', async (req, res) => {
  try {
    console.log("res.body",req.body)
    const userFound = await Users.findOne({email: req.body.email})
    console.log('userInfo',userFound);
    if (!userFound) {
      return
    }
    const passwordMatched = await bcryptjs.compare(req.body.password, userFound.password);
    if(!passwordMatched) {
      return
    }

    req.session.loggedUser = userFound
    res.json("Login Successful")

  } catch (err) {
    console.log(err)
  }
})

router.delete('/', (req, res) => {
  req.session.destroy(() => res.json("Log out successful"))
})

module.exports = router;