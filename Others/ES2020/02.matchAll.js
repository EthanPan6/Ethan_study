/*
match:字符串中符合正则的子字符串

两种匹配方式:
1. 单个匹配,返回详细信息
2.多个匹配,返回一个数组

*/

let str = "hello world!"

let reg = /l/g;

let res = str.match(reg);

let res2 = str.matchAll(reg)


for (let v of res2) {
    console.log(v);
}

console.log(res);