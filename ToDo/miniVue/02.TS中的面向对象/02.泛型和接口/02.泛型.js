/*
泛型:可以使用变量来定义类型,从而进行统一类型操作
*/
function show(arg) {
    return arg;
}
show(123);
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var o = new Foo();
o.name = '123';
