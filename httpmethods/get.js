const express = require('express');
const app = express();
const port = 3000;

// Sample data: In-memory array of users
const users = [
  { id: 1, name: 'Jhn Doe', email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'janesmith@example.com' }
];

// GET route to retrieve all users
app.get('/api/users', (req, res) => {
  // Respond with the list of users
  res.send(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
