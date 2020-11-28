const url = require('url')
const api = 'http://localhost?name=jack&age=18'

// console.log(url.parse(api));
// console.log(url.parse(api,true));

let { query } = url.parse(api, true)
console.log(query);