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
var o = new Foo(1, 2);
console.log(o.x);
console.log(o.sum());
console.log(Bar.showName);
/*
修饰符:

public:公共成员,默认都是public方式.
private: 私有成员,仅内部可以使用,无法继承
protected:受保护成员,内部可以使用,也可以继承,无法在外部使用
readonly:只读成员,只能读取,无法修改
ddd
*/ 
