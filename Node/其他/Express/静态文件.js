// Express 提供了内置的中间件 express.static 来设置静态文件如：图片，CSS，JavaScript 等
var express = require("express");
var app = express();

// app.use(express.static("public"));

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.listen(1995, function () {
    console.log("服务器启动了");
});