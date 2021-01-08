/*
确保某个类只有一个实例,而且自行实例化并向整个系统提供这个实例
*/

var Singleton = function (name) {
    this.name = name;
    //提供一个标记instance，用来判断是否已将创建了该类的实例
    this.instance = null;
}
// 提供了一个静态方法，用户可以直接在类上调用
Singleton.getInstance = function (name) {
    // 没有实例化的时候创建一个该类的实例
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    // 已经实例化了，返回第一次实例化对象的引用
    return this.instance;
}

// var Singleton = /** @class */ (function () {
//     function Singleton(name) {
//         this.name = name;
//         this.instance = null;
//     }
//     Singleton.getInstance = function (name) {
//         if (!this.instance) {
//             this.instance = new Singleton(name);
//         }
//         return this.instance;
//     };
//     return Singleton;
// }());
var o1 = new Singleton('zs');
var o2 = new Singleton('ls');
console.log(o1, o2);
console.log(o1 == o2);//false?
