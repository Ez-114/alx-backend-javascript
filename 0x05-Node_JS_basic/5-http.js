const http = require('http');
const url = require('url');
const fs = require('fs/promises');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

async function countStudents(dataPath) {
  try {
    // Check if the file exists and readable
    await fs.access(
      dataPath,
      fs.constants.F_OK | fs.constants.R_OK, // eslint-disable-line no-bitwise
    );

    // Read content
    const data = await fs.readFile(dataPath, 'utf-8');

    // Split data into lines and filter empty ones
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Get the students only
    const students = lines.slice(1);

    const fields = {};
    let totalStudents = 0;

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
      totalStudents += 1;
    });

    // Build the report parts
    const reportParts = [];
    reportParts.push(`Number of students: ${totalStudents}`);

    // Add student counts for each field
    for (const [field, group] of Object.entries(fields)) {
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`,
      );
    }

    // Return the report as a single string
    return reportParts.join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Create the server
const app = http.createServer();
const PORT = 1245;
const HOST = '127.0.0.1';

app.on('request', (request, response) => {
  // Parse the request url
  const parsedUrl = url.parse(request.url, true);
  const urlPath = parsedUrl.pathname;

  // Handel routes
  if (urlPath === '/' && request.method === 'GET') {
    // Set the response message
    const responseText = 'Hello Holberton School!';

    // Set response headers
    response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Length', responseText.length);

    // Set reqponse status
    response.statusCode = 200;
    response.write(Buffer.from(responseText));
  } else if (urlPath === '/students' && request.method === 'GET') {
    const responsePart = ['This is the list of our students'];

    countStudents(DB_FILE)
      .then((report) => {
        responsePart.push(report);
        const responseText = responsePart.join('\n');
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Content-Length', responseText.length);
        response.statusCode = 200;
        response.write(Buffer.from(responseText));
      })
      .catch((err) => {
        responsePart.push(err instanceof Error ? err.message : err.toString());
        const responseText = responsePart.join('\n');
        response.setHeader('Content-Type', 'text/plain');
        response.setHeader('Content-Length', responseText.length);
        response.statusCode = 200;
        response.write(Buffer.from(responseText));
      });
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server Started -> http://${HOST}:${PORT}/\n`);
});
