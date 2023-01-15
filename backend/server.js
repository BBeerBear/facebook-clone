const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('welcome from home');
});
app.get('/books', (req, res) => {
  res.send('welcome from books');
});
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
