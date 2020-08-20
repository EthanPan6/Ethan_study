var a = null;
var b = undefined;
var n = 1;
var s = "hello Js";
var i = true;
var syb = Symbol("JavaScriptSymbol");
var arr = [1, 2, 3];
var obj = {
    a, b, n, s, i, arr
}

var fn = function (a) {
    return a
}
var fx = (x) => x

// console.log(a.valueOf())//Cannot read property 'valueOf' of null
// console.log(b.valueOf())//Cannot read property 'valueOf' of undefined
console.log(n.valueOf())//1
console.log(s.valueOf())//hello Js
console.log(i.valueOf())//true
console.log(arr.valueOf())//[1, 2, 3]
console.log(obj.valueOf())//{...}
console.log(syb.valueOf())//Symbol(JavaScriptSymbol)
console.log(fn.valueOf())//[Function: fn]
console.log(fx.valueOf())//[Function: fx]

/*
undefined和null没有valueOf()方法，使用会报错；
布尔类型true和false会返回原值；
字符串类型会返回原值；
数字：
如果是整数，需要用小括号将数字包起来再使用valueOf()方法，直接在数字后面跟.valueOf()会报错；
如果是小数会返回原值；
对象Object类型及自定义对象类型会返回原对象（注意花括号可能会被当作代码块的问题）；
函数function类型返回原函数；
数组Array类型返回原数组；
Date对象类型返回数字（1970年1月1日00：00：00至现在的毫秒数）；
正则表达式RegExp类型返回正则对象；
*/