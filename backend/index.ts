import express from 'express';
import cors from 'cors';
import { products } from './products';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/product', (req, res) => {
  res.send(products);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log(`Attempting to start server on port ${PORT}`);