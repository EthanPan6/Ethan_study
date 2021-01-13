/*
又叫发布订阅模式
一个被观察者管理所有依赖它的被观察物件,并且在本身的状态改变时主动发出通知
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function Foo() { }
;
Foo.prototype.bind = function (obj, events, fn) {
    obj.listeners = obj.listeners || {};
    obj.listeners[events] = obj.listeners[events] || [];
    obj.listeners[events].push(fn);
};
Foo.prototype.start = function (obj, events) {
    var _a;
    var args = Array.prototype.slice.call(arguments).slice(2);
    for (var i = obj.listeners[events].length; i--;) {
        (_a = obj.listeners[events][i]).call.apply(_a, __spreadArrays([obj], args));
    }
};
function ScaleMethods(elem) {
    this.elem = elem;
    this.scale();
    this.wheel();
}
ScaleMethods.prototype.scale = function () {
    var downX = 0;
    var downY = 0;
    var downW = 0;
    var downH = 0;
    var _this = this;
    this.elem.onmousedown = function (e) {
        downX = e.pageX;
        downY = e.pageY;
        downW = _this.elem.offsetWidth;
        downH = _this.elem.offsetHeight;
        document.onmousemove = function (e) {
            _this.elem.style.width = e.pageX - downX + downW + 'px';
            _this.elem.style.height = e.pageY - downY + downH + 'px';
            o.start(_this, 'scale', _this.elem.offsetWidth, _this.elem.offsetHeight);
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return !1;
    };
};
ScaleMethods.prototype.wheel = function () {
    var _this = this;
    this.onmousewheel = function (e) {
        this.style.height = e.wheelDelta > 0 ? (this.offsetHeight - 10 + 'px') : (this.offsetHeight + 10 + 'px');
    };
};
var div1 = document.getElementById('div1');
var o = new Foo;
o.bind(div1, 'show', function () {
    console.log(123);
});
o.bind(div1, 'show', function () {
    console.log(789);
});
o.start(div1, 'show');
var s1 = new ScaleMethods(div1);
o.bind(s1, 'scale', function (a, b) { return div1.innerHTML = a + ',' + b; });
