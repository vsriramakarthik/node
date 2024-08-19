const url = require('url');

const baseUrl = 'http://www.example.com/about';
const relativeUrl = '../contact';

const resolvedUrl = url.resolve(baseUrl, relativeUrl);

console.log(resolvedUrl);
