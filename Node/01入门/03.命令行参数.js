process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

const args = require('minimist')(process.argv.slice(2))
console.log(args['name']);
/*
0: D:\nodejs\node.exe
1: E:\study\Ethan_study\Node\01入门\03.命令行参数.js
2: --name=18
18
*/