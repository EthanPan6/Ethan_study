"use strict";
//无参数
//声明式
function run() {
    return 'running...';
}
//表达式(匿名函数)
var fn1 = function () {
    return 1;
};
//有参数
//指定参数
function sayHi(name, age) {
    return name + "say:Hi!I'm" + age;
}
var getInfo = function (name, age) {
    return name + "-----------" + age;
};
//可选参数
function getMore(name, age) {
    var result = age ? age : (age ?  ? '默认值' :  : );
    return "" + result;
}
//剩余参数
function sum() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var res = 0;
    for (var i = 0; i < rest.length; i++) {
        res += rest[i];
    }
    return res;
}
function sum1(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var res = a + b;
    for (var i = 0; i < rest.length; i++) {
        res += rest[i];
    }
    return res;
}
//函数重载
//两个或以上的同名函数,传参不同实现多种功能
