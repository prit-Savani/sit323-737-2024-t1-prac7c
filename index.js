const express = require('express');
const path = require('path');

const app = express();
const port = 3040;

// Set the public_html folder as the default home directory
app.use(express.static(path.join(__dirname, 'public_html')));

// Define a route to handle the root URL (http://localhost:3040/)
app.get('/', (req, res) => {
  res.send('Welcome to SIT737! This page was new page.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
