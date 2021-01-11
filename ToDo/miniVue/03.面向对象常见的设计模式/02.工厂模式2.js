/*
提供一个创建一系列相关对象的入口,统一了对象创建职责,创建对象时无需关心具体类

使用工厂类来进行创建
*/
//工厂模式
function Foo() {
    this.name = "李白";
}
function Bar() {
    this.name = "杜甫";
}
function Factory() {
}
Factory.prototype.create = function (arg) {
    var result;
    if (arg == 'foo') {
        return result = new Foo();
    }
    else if (arg == 'bar') {
        return result = new Bar();
    }
    return result;
};
var fa = new Factory();
var o = fa.create('foo');
console.log(o.name);
