var fs = require('fs')
fs.stat('http_get.js', (error, stats) => {
    if (error) {
        console.log(error)
    } else {
        console.log(stats)
        console.log(`文件:${stats.isFile()}`)
        console.log(`目录:${stats.isDirectory()}`)
    }
})