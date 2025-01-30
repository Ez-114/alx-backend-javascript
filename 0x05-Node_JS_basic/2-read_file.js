const fs = require('node:fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const content = fs.readFileSync(datapath, 'utf-8');
  content.toString('utf-8');
  content.trim();
  content.split('\n');
  
};
