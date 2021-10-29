const {Schema, model} = require('mongoose');

const usersSchema = Schema({
  email: {type: String, require: true},
  name: {type: String, require: true},
  password: {type: String, require: true},
  profileImage: String,
})

const Users = model("Users", usersSchema);

module.exports = Users
