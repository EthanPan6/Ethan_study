/*
命名空间:防止类似命名冲突
*/
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.show = function () {
        console.log('hello');
    };
    return Foo;
}());
var o = new Foo();
o.show();
