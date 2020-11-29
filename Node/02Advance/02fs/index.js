const fs = require('fs');

// fs.stat检测该路径是目录还是文件
fs.stat('./html', (err, data) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(data.isDirectory());//true
    console.log(data.isFile());//false
})
