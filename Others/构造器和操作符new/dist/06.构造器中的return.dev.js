"use strict";

/*
通常，构造器没有 return 语句。它们的任务是将所有必要的东西写入 this，并自动转换为结果。

如果这有一个 return 语句，那么规则就简单了：

如果 return 返回的是一个对象，则返回这个对象，而不是 this。
如果 return 返回的是一个原始类型或者无返回值，则忽略。

return带有对象的 return 返回该对象，在所有其他情况下返回 this。
*/
function BigUser() {
  this.name = "John";
  return {
    name: "Godzilla"
  }; // <-- 返回这个对象
}

console.log(new BigUser().name); // Godzilla，得到了那个对象

function O() {
  this.num = 7;
  return {};
}

console.log(new O()); // {}

function N() {
  this.num = 7;
  return 77;
}

console.log(new N()); // 7