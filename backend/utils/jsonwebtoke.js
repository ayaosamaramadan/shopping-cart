const jwt = require('jsonwebtoken');

const generateToken = (user) => { 
    const secret = process.env.JWT_SECRET;
    // console.log(secret);
    const token = jwt.sign({ _id: user._id }, secret);
    return token;
  };

module.exports = generateToken;