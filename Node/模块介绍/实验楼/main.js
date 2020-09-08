console.log("main 开始");
var a = require("./a.js");
var b = require("./b.js");
console.log("在 main 中，a.done=%j，b.done=%j", a.done, b.done);