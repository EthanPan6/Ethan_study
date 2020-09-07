console.log("a 开始");
exports.done = false;
var b = require("./b.js");
console.log("在 a 中，b.done = %j", b.done);
exports.done = true;
console.log("a 结束");