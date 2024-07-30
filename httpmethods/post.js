const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET route to retrieve all users
app.get('/api/users', (req, res) => {
  // Logic to retrieve and send a list of users
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' }
  ];
  res.send(users);
});

// POST route to create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Retrieve user data from request body

  // Simulate saving the new user to a database
  console.log('Creating new user:', newUser);

  // Respond with a success message
  res.status(201).send(`User created: ${JSON.stringify(newUser)}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
