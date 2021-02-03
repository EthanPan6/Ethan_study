/*
如何使得两个对象相等
var o1 = {};
var o2 = {};
console.log(o1 == o2);

思路1 :修改Object原型上的tostring或者valueof方法
思路2:definegetter
思路3:将两个对象由单例模式创建




*/



var o1 = {};
var o2 = {};

Object.prototype.toString = function () {
    return String(this)
}
console.log(o1 == o2);