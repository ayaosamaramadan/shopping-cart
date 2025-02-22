const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  minlength: 6,
    maxlength: 255
  },email: {type: String,
    required: true,
    minlength: 6,
    maxlength: 200,
    unique: true
  },
  password: {
type: String,
    required: true,
    minlength: 6,
    maxlength: 200
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;