import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import compression from 'compression';
import { products } from './products';
const app = express();

dotenv.config();

// app.use(compression());
app.use(express.json());
app.use(cors());

app.get('/product', (req, res) => {
  res.send(products);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
