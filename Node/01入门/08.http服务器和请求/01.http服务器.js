const http = require('http')
const port = 2020

const server = http.createServer((req, res) => {
    res.statusCode = 200 
    //设置 statusCode 属性为 200，以表明响应成功
    res.setHeader('Content-Type', 'text/plain')
    //设置了 Content-Type 响应头
    res.end('Hello World!\n')
    //结束并关闭响应，将内容作为参数添加到 end()
}).listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}/`);
})