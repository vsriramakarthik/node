const express = require('express');
const app = express();
const port = 3000;

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Route to handle POST requests
app.post('/data', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
