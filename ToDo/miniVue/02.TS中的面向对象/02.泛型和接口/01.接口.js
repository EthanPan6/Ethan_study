/*
接口的作用:为类型命名或代码或第三方代码定义契约
*/
var Foo = /** @class */ (function () {
    function Foo(name, age) {
        this.name = name;
    }
    Foo.prototype.show = function () {
        console.log(this.name);
    };
    return Foo;
}());
