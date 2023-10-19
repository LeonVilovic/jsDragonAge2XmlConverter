const fs = require('fs').promises; // Use fs.promises for promise-based file operations
const xml2js = require('xml2js');

async function parseXmlFile() {
  try {
    const xmlData = await fs.readFile('XMLClearedUp.xml', 'utf-8');
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(xmlData);
    return result.tlk;
  } catch (err) {
    console.error('Error parsing XML:', err);
    throw err;
  }
}
// read a text file and use .split('\n');
async function readTextFile() {
  try {
    const data = await fs.readFile('banters.txt', 'utf-8');
    const txtData = data.split('\n');
    return txtData;
  } catch (err) {
    console.error(`Error reading the file: ${err}`);
    throw err;
  }
}

async function main() {
  let tlk;
  let txtData;

  try {
    tlk = await parseXmlFile();
    //  console.log(tlk);

    txtData = await readTextFile();
    //   console.log(txtData);

  } catch (err) {
    console.error('An error occurred:', err);
  }

  for (let i = 0; i < txtData.length; i++) {

    for (let j = 0; j < tlk.string.length; j++) {
      if(txtData[i].includes(':')){
      // if (txtData[i].substring(txtData[i].indexOf(':')+1,txtData[i].length).includes(tlk.string[j]._)) {
      if (txtData[i].substring(txtData[i].indexOf(':')+2,txtData[i].length).localeCompare( tlk.string[j]._)) {
          txtData[i] += ' ' + tlk.string[j].$.id // add id to the end of the line
        }
      }

    }

  }

  let outputContent = txtData.join('\n');
  console.log('outputing:')
  const filePath = 'output.txt';

  fs.writeFile(filePath, outputContent, 'utf-8', (err) => {
    if (err) {
      console.error(`Error writing to the file: ${err}`);
    } else {
      console.log(`Content has been written to ${filePath}`);
    }
  });
  console.log('end')
}

main();
