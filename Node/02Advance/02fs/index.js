const fs = require('fs');

// fs.stat检测该路径是目录还是文件
// fs.stat('./html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data.isDirectory());//true
//     console.log(data.isFile());//false
// })
// // fs.mkdir创建目录(重要)
// fs.mkdir('./css', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('创建成功');
// })

// fs.writeFile('./html/text', 'Hello World', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('写入成功');
// })

// fs.appendFile('./html/text', '二次写入', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('二次写入成功');
// })
// // 读取文件,读出的是二进制文件,可以通过toString方法变成字符串
// fs.readFile('./html/text', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data.toString());
// })

// fs.readdir('./html', (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

// fs.rename可以重命名和移动文件
// fs.rename('./html/text', './css/style.css', err => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log('成功');
// })

//fs.rmdir删除目录,如果目标目录下还有文件则无法删除
fs.rmdir('./html', err => {
    if (err) {
        console.log(err);
        return
    }
    console.log('删除成功');
})
//fs.unlink删除文件
fs.unlink('./css/style.css', err => {
    if (err) {
        console.log(err);
        return
    }
    console.log('删除成功');
})