// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a port to listen for requests
const port = 3000;

// Define a GET route at the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a GET route for the "/about" URL
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Define a GET route with a route parameter "/users/:name"
app.get('/users/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}!`);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
