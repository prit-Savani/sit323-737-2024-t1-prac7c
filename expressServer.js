// Require the express web application framework (https://expressjs.com)
var express = require('express');
// Create a new web application by calling the express function
var app = express();
// Get port from environment and store in Express.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Normalize a port into a number, string, or false.
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// Tell our application to serve all the files under the `public_html` directory
app.use(express.static('public_html'));

// This is a 'route' method to handle GET request for /competition
app.get('/competition', function(request, response) {
  // Generate a random number (1, 2, or 3) to simulate the chance of winning
  var randomNumber = Math.floor(Math.random() * 3) + 1;

  // Determine if it's a win or no-win based on the random number
  var isWin = randomNumber === 3;

  // Display appropriate message and update statistics
  var message, statistics;
  if (isWin) {
    message = 'Congratulations! You are a Winner!';
    statistics = 'Wins: 1, Losses: 0';
  } else {
    message = 'Sorry, you did not win this time.';
    statistics = 'Wins: 0, Losses: 1';
  }

  // Send the dynamically created page back to the client
  response.send(htmlPage);
});

// Tell our application to listen to requests at port 3000 on the localhost
app.listen(port, function () {
  // When the application starts, print to the console that our app is running
  console.log(`Web server running at: http://localhost:${port}`);
  console.log("Type Ctrl+C to shut down the web server");
});
