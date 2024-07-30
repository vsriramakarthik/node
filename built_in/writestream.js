const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('world!');
writableStream.end();

writableStream.on('finish', () => {
  console.log('All data written.');
});
