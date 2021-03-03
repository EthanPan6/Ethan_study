"use strict";
//布尔
var isOk = false;
//数字
var a = 12;
//字符串
var str = 'hello world';
//单类型数组
var arr1 = [1, 2, 3, 5];
var arr2 = [12, 5, 9, 5];
//多类型数组
var arr3 = [12, 5, 9, 5, true];
//指定类型数组----元组
var arr4 = ['s', 1, true];
//枚举类型
var pay_staus;
(function (pay_staus) {
    pay_staus[pay_staus["\u672A\u652F\u4ED8"] = 0] = "\u672A\u652F\u4ED8";
    pay_staus[pay_staus["\u652F\u4ED8"] = 1] = "\u652F\u4ED8";
    pay_staus[pay_staus["\u4EA4\u6613\u6210\u529F"] = 2] = "\u4EA4\u6613\u6210\u529F";
})(pay_staus || (pay_staus = {}));
//使用
var stat = pay_staus.交易成功; //2
//any类型
var unknownlx;
unknownlx = true;
unknownlx = 1;
unknownlx = 'true';
unknownlx = ['true'];
// undefined类型,只能赋值为undefined
var ss = undefined;
var maybeanumber = 1;
//null类型,只能被赋值为null
var empty = null;
//void类,无类型
function func() { }
var fn = function () { };
//never类型:是其他类型(包括null,undefined)的子类型,代表不会出现的值,所以只能赋值never且无法被直接赋值
var dnever;
dnever = (function () {
    throw new Error('异常');
})();
