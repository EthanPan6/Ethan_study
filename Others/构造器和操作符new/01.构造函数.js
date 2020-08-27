/*
构造函数在技术上是常规函数。不过有两个约定：

它们的命名以大写字母开头。
它们只能由 "new" 操作符来执行。

*/
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user1 = new User('jack');

console.log(user1 ); //User { name: 'jack', isAdmin: false }