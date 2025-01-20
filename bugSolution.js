const express = require('express');
const app = express();

// Ensure express.json() is used BEFORE other middleware
app.use(express.json({ limit: '50mb' })); // Added limit to handle large requests
app.use(express.urlencoded({ extended: true }));

app.post('/user', (req, res, next) => {
  // Check for errors from express.json()
  if (!req.body) {
    return next(new Error('Invalid JSON request body'));
  }
  console.log(req.body);
  res.send('User created');
}).catch(err => {
  console.error('Error creating user:', err);
  res.status(500).send('Error creating user');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});