process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    // Write the name back to the console with a carriage return (\r)
    process.stdout.write(`Your name is: ${name.toString()}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is closing\n');
});
