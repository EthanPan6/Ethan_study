const fs = require('fs')
fs.mkdir('./目录1/目录2/目录3', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('创建成功');
});