const fs = require('node:fs/promises');

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

    // Log total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log students in each field
    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
