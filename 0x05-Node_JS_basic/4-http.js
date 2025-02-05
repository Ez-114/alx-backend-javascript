const http = require('node:http');

// Define the host and port
const HOST = 'localhost';
const PORT = 1245;

// Create a server instance
const app = http.createServer();

// Listen to any request
app.on('request', (request, response) => {
  // Log the requested url
  process.stdout.write(`New Request: ${request.url}\n`);

  const responseText = 'Hello ALX!';

  // Set response headers and status code
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(responseText);
});

// Start listening
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server started -> http://${HOST}:${PORT}/\n`);
});

module.exports = app;
