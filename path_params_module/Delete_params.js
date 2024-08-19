// Delete a user
app.delete('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const index = users.findIndex(u => u.id === userId);
  
    if (index !== -1) {
      users.splice(index, 1);
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  });
  