const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('你好')
})

app.listen(3000, () => console.log('服务器已就绪'))
// process.exit() //程序直接终止
console.log(process.pid);//获取该进程的pid,然后在 02.强制退出.js 中调用该pid


process.on('SIGTERM', () => {
    server.close(() => {
        console.log('进程已终止')
    })
})