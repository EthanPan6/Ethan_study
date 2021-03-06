/*
构造器的主要目的 —— 实现可重用的对象创建代码。便于实现继承

从技术上讲，任何函数都可以用作构造器。即：任何函数都可以通过 new 来运行，它会执行上面的算法。“首字母大写”是一个共同的约定，以明确表示一个函数将被使用 new 来运行。
*/

/*
2.我们有许多行用于创建单个复杂对象的代码，我们可以将它们封装在构造函数中（new function(){...}）
构造器不能被再次调用，因为它不保存在任何地方，只是被创建和调用。因此，这个技巧旨在封装构建单个对象的代码，而无需将来重用。

*/
let user = new function () {
    this.name = "Ethan";
    this.isAdmin = true;

    // ……用于用户创建的其他代码
    // 也许是复杂的逻辑和语句
    // 局部变量等
}
console.log(user)//{ name: 'Ethan', isAdmin: true }
//注意对比 01.构造函数 的运行结果User { name: 'jack', isAdmin: false }
