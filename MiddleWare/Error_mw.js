const express = require('express');
const app = express();

// Middleware to handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Route that triggers an error
app.get('/error', (req, res, next) => {
  const err = new Error('Oops! Something went wrong.');
  next(err); // Pass the error to the next middleware
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
