const bcrypt = require("bcrypt");
const joi = require("joi");
const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = joi.object({
    email: joi.string().min(6).max(200).required().email(),
    password: joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!isValidPassword)
    return res.status(400).send("Invalid email or password");
  const token = generateToken(user);

  res.send(token);
});

function generateToken(user) {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(
    { _id: user._id, name: user.name, email: user.email },
    secret,
    { expiresIn: "1h" }
  );
}

module.exports = router;
