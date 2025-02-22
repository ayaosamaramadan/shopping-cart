const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const products = require('./products');
const register = require('./routes/register');
const login = require('./routes/login');

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/api/register', register);
app.use('/api/login', login);

app.get('/product', (req, res) => {
  res.send(products);
});

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000;

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });