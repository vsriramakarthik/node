const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data: In-memory array of users
const users = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' }
];

// GET route to retrieve all users
app.get('/api/users', (req, res) => {
  res.send(users);
});

// PUT route to update an existing user
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Get user ID from the URL
  const updatedUser = req.body; // Get updated user data from request body

  // Find the user by ID
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    // If user not found, return a 404 Not Found status
    return res.status(404).send('User not found');
  }

  // Update the user's details
  users[userIndex] = { ...users[userIndex], ...updatedUser };

  // Respond with the updated user
  res.send(users[userIndex]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
