const fs = require('fs');
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('fileRead', (data) => {
  console.log('File contents:', data);
});

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  emitter.emit('fileRead', data);
});
