const url = require('url');

const urlObject = {
  protocol: 'http',
  hostname: 'www.example.com',
  port: '8080',
  pathname: '/pathname',
  query: {
    search: 'test'
  }
};

const formattedUrl = url.format(urlObject);

console.log(formattedUrl);
