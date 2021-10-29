const express = require('express');
const bcrypt = require('bcrypt');
const Users = require("../models/users")

const router = express.Router();

// Route to create user
router.post('/', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await Users.create(req.body);

    res.json("Account successfully created")
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;