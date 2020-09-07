import fs from 'fs';
let data = fs.readFileSync('./a.txt');
console.log(data.toString());