//<Route Path ="/profile?:name" component={profile}/
const express = require('express');
const app = express();
const port = 3000;

// Define a route with path parameters
app.get('/users/:userId/orders/:orderId', (req, res) => {
  const { userId, orderId } = req.params;
  res.send(`User ID: ${userId}, Order ID: ${orderId}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
