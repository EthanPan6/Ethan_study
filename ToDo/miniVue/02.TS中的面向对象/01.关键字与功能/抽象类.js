/*
abstract: 用于创建抽象类的修饰符.
抽象类不能直接用于创建对象,作用于接口类似,不同的是,抽象类可以包含成员的实现细节
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo = /** @class */ (function () {
    function Foo(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Foo.prototype.sum = function () {
        return this.x + this.y;
    };
    return Foo;
}());
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = 0;
        _this.z = z;
        return _this;
    }
    Bar.prototype.sum = function () {
        return this.x + this.y + this.z;
    };
    Bar.showName = 'Foo';
    return Bar;
}(Foo));
var o = new Bar(1, 2, 5);
console.log(o.x);
console.log(o.sum());
console.log(Bar.showName);
