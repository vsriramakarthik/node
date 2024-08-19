const express = require('express');
const app = express();
const port = 3000;

// Sample data
const products = [
  { id: '1', name: 'Laptop', price: 1000 },
  { id: '2', name: 'Smartphone', price: 500 },
  { id: '3', name: 'Tablet', price: 300 },
];

// Define a route to get product details
app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
