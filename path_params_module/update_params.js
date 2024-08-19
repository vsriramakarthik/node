// Mock data
let users = [
    { id: '1', name: 'Alice', age: 25 },
    { id: '2', name: 'Bob', age: 30 },
  ];
  
  // Update a user's age
  app.put('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const newAge = req.body.age; // Assume age is sent in request body
    const user = users.find(u => u.id === userId);
  
    if (user) {
      user.age = newAge;
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });
  