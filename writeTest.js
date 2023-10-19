const fs = require('fs');

let output = ['First row','second row','Third row'];

let content = output.join('\n') ;
const filePath = 'output.txt';

// Write the content to the file
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(`Error writing to the file: ${err}`);
  } else {
    console.log(`Content has been written to ${filePath}`);
  }
});
