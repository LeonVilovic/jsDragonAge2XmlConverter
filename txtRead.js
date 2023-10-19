const fs = require('fs');

const filePath = 'banters.txt';
let txtData;
// Read the contents of the text file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Error reading the file: ${err}`);
  } else {
    // You can access the file contents in the 'data' variable.
    daconsole.log(data);
    txtData = data.split('\n');
  }
});
console.log(txtData);