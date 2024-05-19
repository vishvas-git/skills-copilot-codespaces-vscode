// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create GET request
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
