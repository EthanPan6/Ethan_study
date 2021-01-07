/*
命名空间:防止类似命名冲突
*/
var QF;
(function (QF) {
    var Foo = /** @class */ (function () {
        function Foo() {
        }
        Foo.prototype.show = function () {
            console.log('hello');
        };
        return Foo;
    }());
    QF.Foo = Foo;
})(QF || (QF = {}));
var o = new QF.Foo();
o.show();
