var http = require('http');//引入http模块
const url = require('url')
// const api = 'http://localhost?name=jack&age=18'

// let { query } = url.parse(api, true)


http.createServer(function (request, response) {
    //request:获取客户端传过来的信息
    //response:给浏览器的响应信息

    let { query } = url.parse(request.url, true)
    console.log(query);
    /*  
    触发了两个请求,所以会打印两次,我们可以添加判断进行拦截
        1. /
        2. /favicon.ico
    */
    response.writeHead(200, { 'Content-Type': 'text/plain' });//设置响应头
    response.end('Hello World');//结束响应并返回一段信息
}).listen(8081);//监听8081端口

console.log('Server running at http://127.0.0.1:8081/');