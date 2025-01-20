const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('User created');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});