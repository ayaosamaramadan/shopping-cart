const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const compression = require('compression');
const products = require('./products');

const app = express();

dotenv.config();

// app.use(compression());
app.use(express.json());
app.use(cors());

app.get('/product', (req, res) => {
  res.send(products);
});

const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message);
  });