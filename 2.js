const fs = require('fs');

// Replace 'your-text-file.txt' with the path to your text file.
const filePath = 'banters.txt';

// Read the contents of the text file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
  } else {
    // You can access the file contents in the 'data' variable.
    console.log(data);
  }
});
