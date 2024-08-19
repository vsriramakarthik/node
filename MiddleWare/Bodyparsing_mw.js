const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
