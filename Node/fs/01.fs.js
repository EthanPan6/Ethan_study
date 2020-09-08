import fs from 'fs';
let data = fs.readFileSync('./doc/a.txt');
console.log(data.toString());