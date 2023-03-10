//The querystring.parse() function takes a string as input and returns an object containing the parsed key-value pairs. 

const querystring = require('querystring');

const queryString = 'foo=bar&baz=qux';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery);
