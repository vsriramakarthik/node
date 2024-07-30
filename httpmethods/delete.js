const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data: In-memory array of users
let users = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' }
];

// GET route to retrieve all users
app.get('/api/users', (req, res) => {
  res.send(users);
});

// DELETE route to remove a user by ID
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id); // Get user ID from the URL

  // Find the user by ID
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    // If user not found, return a 404 Not Found status
    return res.status(404).send('User not found');
  }

  // Remove the user from the array
  users.splice(userIndex, 1);

  // Respond with a success message
  res.send(`User with id ${userId} deleted successfully`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
