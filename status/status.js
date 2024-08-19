const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route handler for GET requests to '/'
app.get('/', (req, res) => {
  res.status(800).send('Hello, world!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });