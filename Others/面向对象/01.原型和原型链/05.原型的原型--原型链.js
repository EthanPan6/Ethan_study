/*

    Father（构造函数）------------------------>father(实例对象)
    |               / \                          |
    |                |                           |
    |                |                           |
   prototype       constructor              __proto__
    |                |                           |
    |                |                           |
   \ /               |                           |
    Father.prototype(实例de原型)<-----------------
    |
    |
    |
__proto__
    |
    |       |-----------constructor-------------|
   \ /      |                                  \ /
Object.prototype                            Object()
    |      /\                                   |
    |       |--------   --prototype-------------|
    |
__proto__
    |
    |
   \ /
   null

   null 表示“没有对象”，即该处不应该有值
*/
console.log(Object.prototype.__proto__ === null) // true