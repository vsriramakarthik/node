const url = require('url');


const urlString = 'http://www.example.com:8080/pathname?search=test#hash';
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);

// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.example.com:8080',
//     port: '8080',
//     hostname: 'www.example.com', 
//     hash: '#hash',
//     search: '?search=test',      
//     query: [Object: null prototype] { search: 'test' },  
//     pathname: '/pathname',
//     path: '/pathname?search=test',
//     href: 'http://www.example.com:8080/pathname?search=test#hash'
//   }