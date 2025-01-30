const fs = require('node:fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const content = fs.readFileSync(dataPath, 'utf-8').trim();

  // Split into lines and remove empty lines
  const lines = content.split('\n').filter((line) => line.length > 0);

  if (lines.length < 2) {
    throw new Error('No valid student data found');
  }

  // Extract header and student data
  const header = lines[0].split(',');
  const students = lines.slice(1).map((line) => line.split(','));

  // Find the index of the "field" column
  const fieldIndex = header.indexOf('field');
  if (fieldIndex === -1) {
    throw new Error('Invalid database format');
  }

  // Count students in each field
  const fieldCounts = {};
  students.forEach((student) => {
    const field = student[fieldIndex].trim();
    if (!fieldCounts[field]) {
      fieldCounts[field] = [];
    }
    fieldCounts[field].push(student[0]); // Assuming first column is the name
  });

  console.log(`Number of students: ${students.length}`);
  for (const [field, names] of Object.entries(fieldCounts)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
};

module.exports = countStudents;
