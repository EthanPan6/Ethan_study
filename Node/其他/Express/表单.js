var express = require("express");
var app = express();

app.get("/", function (req, res) {
    // 传送指定路径的文件-会自动根据文件 extension 设定 Content-Type
    // 也可以用前面的 art-template 模板引擎
    res.sendFile(__dirname + "/" + "getTest.html");
});

app.get("/get_test", function (req, res) {
    // 输出 JSON 格式
    var response = {
        studentNumber: req.query.stuNum,
        studentName: req.query.stuNam,
    };
    console.log(response);
    // JSON.stringify() 方法是将一个 JavaScript 值(对象或者数组)转换为一个 JSON 字符串
    res.end(JSON.stringify(response));
});


app.post("/post_test", urlencodedParser, function (req, res) {
    // 输出 JSON 格式
    var response = {
        studentNumber: req.body.stuNum,
        studentName: req.body.stuNam,
    };
    console.log(response);
    // JSON.stringify() 方法是将一个 JavaScript 值（对象或者数组）转换为一个 JSON 字符串
    res.end(JSON.stringify(response));
});
app.listen(2020, function () {
    console.log("服务器启动了");
});