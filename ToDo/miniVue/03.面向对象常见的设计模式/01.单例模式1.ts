/*
确保某个类只有一个实例,而且自行实例化并向整个系统提供这个实例

https://segmentfault.com/a/1190000019532633
*/

//简单模式
var Singleton = function (name: string) {
    this.name = name;
    //提供一个标记instance，用来判断是否已将创建了该类的实例
    this.instance = null;
}
Singleton.prototype.getName = function () {
    console.log(this.name);
}
// 提供了一个静态方法，用户可以直接在类上调用
Singleton.getInstance = function (name: string) {
    // 没有实例化的时候创建一个该类的实例
    if (!this.instance) {
        this.instance = new Singleton(name);
    }
    // 已经实例化了，返回第一次实例化对象的引用
    return this.instance;
}
let Winner = Singleton.getInstance('Winner');
let Looser = Singleton.getInstance('Looser');

console.log(Winner === Looser); // true
console.log(Winner.getName());  // 'Winner'
console.log(Looser.getName());  // 'Winner'

/* 代码中定义了一个 Singleton 函数，函数在 JavaScript 中是“一等公民“，可以为其定义属性方法。
因此我们可以在函数 Singleton 中定义一个 getInstance() 方法来管控单例，并创建返回类实例对象，
而不是通过传统的 new 操作符来创建类实例对象。

存在问题:
1. 不够“透明”，无法使用 new 来进行类实例化，需约束该类实例化的调用方式： Singleton.getInstance(...);
2. 管理单例的操作，与对象创建的操作，功能代码耦合在一起，不符合 “单一职责原则”
 */




