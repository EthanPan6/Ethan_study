const fs = require('fs');
//导入文件模块,读写文件的接口




//同步
let data1 = fs.open("./doc/a.txt", "r+");
// console.log(data1);报错,实际上在内存上打开


