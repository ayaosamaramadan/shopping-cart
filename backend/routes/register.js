const bcrypt = require("bcrypt");
const joi = require("joi");
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = joi.object({
    name: joi.string().min(6).max(255).required(),
    email: joi.string().min(6).max(200).required().email(),
    password: joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });

  if (user) return res.status(400).send("Email already exists");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save();

  const token = generateToken(user);

  res.send({ token });
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
