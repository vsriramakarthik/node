const fs = require('fs');
const readableStream = fs.createReadStream('demo.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('No more data.');
});
