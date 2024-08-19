const { URL } = require('url');

const myUrl = new URL('http://www.example.com:8080/pathname?search=test#hash');

// Update the search parameters
myUrl.searchParams.set('search', 'newValue');

console.log(myUrl.toString());  // 'http://www.example.com:8080/pathname?search=newValue#hash'
