"use strict";
//any类型
var x = 12;
x = "helllo Typescript !";
x = true;
var y = 4;
y.ifItExists(); // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
y.toFixed(); // 正确
var arrayList = [1, false, 'fine'];
arrayList[1] = 100;
//null 和 undefine
// 在tsconfig中启用 --strictNullChecks:true
var num;
num = 1; // 运行正确
// num = undefined;    // 运行错误
// num = null;    // 运行错误
