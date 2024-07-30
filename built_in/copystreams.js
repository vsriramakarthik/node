const fs = require('fs');

// Create a readable stream for the source file
const readableStream = fs.createReadStream('demo.txt', { encoding: 'utf8' });

// Create a writable stream for the destination file
const writableStream = fs.createWriteStream('destination.txt');

// Pipe the data from the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle events
writableStream.on('finish', () => {
  console.log('File has been copied.');
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});
