const express = require("express");
const app = express();
// GET 请求
app.get("/", function (req, res) {
    console.log("GET 请求");
    res.send("Hello，我是GET请求");
});

// POST 请求
app.post("/", function (req, res) {
    console.log("POST 请求");
    res.send("Hello，我是 POST 请求");
});

// /index 响应 index 页面 GET 请求
app.get("/index", function (req, res) {
    console.log("/响应index页面 GET 请求");
    res.send("Hello，我是 index 页面 GET 请求");
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get("/ab*cd", function (req, res) {
    console.log("/ab*cd GET 请求");
    res.send("Hello，我是正则匹配");
});

app.listen(2025, () => {
    console.log("启动成功");
})