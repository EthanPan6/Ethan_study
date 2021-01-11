/*
提供一个创建一系列相关对象的入口,统一了对象创建职责,创建对象时无需关心具体类
*/

//简单工厂模式
function Foo() {
    this.name = "李白";
}
function Bar() {
    this.name = "杜甫";
}
function Factory(arg) {
    var result;
    if (arg == 'foo') {
        return result = new Foo();
    }
    else if (arg == 'bar') {
        return result = new Bar();
    }
    return result;
}
var o = new Factory('bar');
console.log(o.name);
