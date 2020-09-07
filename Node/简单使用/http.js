// 加载 http 模块
var http = require("http");
var fs = require("fs");
// 1. 创建 Server
var server = http.createServer();

// 2. 监听 request 请求事件，设置请求处理函数
server.on("request", function (req, res) {
    console.log("收到请求了，请求路径是：" + req.url);
    console.log(
        "请求我的客户端的地址是：",
        req.socket.remoteAddress,
        req.socket.remotePort
    );
    var url = req.url;
    // res.writeHead(200, {
    //     "Content-Type": "text/html;charset=UTF-8"
    // });
    // if (url === "/") {
    //     res.end("<h1>Index page</h1>");
    // } else if (url === "/login") {
    //     res.end("<h1>Login page</h1>");
    // } else {
    //     res.end("404 Not Found.");
    // }

    if (url === "/") {
 
        res.setHeader("Content-Type", "text/plain");
        // 我们要发送的还是在文件中的内容
        fs.readFile("./index.html", function (err, data) {
            if (err) {
                res.end("文件读取失败，请稍后重试！");
            } else {
                // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
                res.end(data);
            }
        });
    } else if (url === "/register") {
        // url：统一资源定位符
        // 一个 url 最终其实是要对应到一个资源的
        fs.readFile("./register.html", function (err, data) {
            if (err) {
                res.end("文件读取失败，请稍后重试！");
            } else {
                //setHeader也是设置响应头，它们将与传递给 response.writeHead() 的任何响应头合并，其中 response.writeHead() 的响应头优先。
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        });
    } else {
        res.end("<h1>404 Not Found.</h1>");
    }


});

// 3. 绑定端口号，启动服务
server.listen(2020, function () {
    console.log("服务器启动成功，可以访问了。。。");
});