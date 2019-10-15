var fs = require('fs')
//先删除文件才能删除目录
fs.readdirSync('logs').map((file) => {
    fs.unlink(`logs/${file}`, error => {
        if (error) {
            console.log(error)
        } else {
            console.log('success')
        }
    })
})


fs.rmdir('logs', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('success')
        // console.log(files)
    }
})