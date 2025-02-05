const http = require('http');

// Define the host and port
const HOST = 'localhost';
const PORT = 1245;

// Create a server instance
const app = http.createServer();

// Listen to any request
app.on('request', (_, response) => {
  const responseText = 'Hello Holberton School!';

  // Set response headers and status code
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
});

// Start listening
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server started -> http://${HOST}:${PORT}/\n`);
});

module.exports = app;
