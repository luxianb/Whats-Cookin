const express = require('express');
const bcrypt = require('bcrypt');
const Users = require("../models/users")

const router = express.Router();

// Route to login
router.post('/', async (req, res) => {
  try {
    console.log("res.body",req.body)
    const userFound = await Users.findOne({email: req.body.email})
    console.log('userInfo',userFound);
    if (!userFound) {
      return
    }
    const passwordMatched = await bcrypt.compare(req.body.password, userFound.password);
    if(!passwordMatched) {
      return
    }

    req.session.loggedUser = userFound
    res.json("Login Successful")

  } catch (err) {
    console.log(err)
  }
})

module.exports = router;