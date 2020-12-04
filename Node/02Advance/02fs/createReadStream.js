const fs = require('fs')
const readStream = fs.createReadStream

let stream = readStream('./index.js')

let count = 0;
let str = '';
stream.on('data', data => {
    str += data;
    count++
})
stream.on('end', () => {
    console.log(str);
    console.log(count);
})

stream.on('error', err => {
    console.log(err);
})