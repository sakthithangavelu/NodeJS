const url = require('url');

const urlString = 'https://www.example.com/search?q=node.js&limit=10&page=1';
const parsedUrl = url.parse(urlString, true);

const queryObject = parsedUrl.query;

console.log(queryObject);