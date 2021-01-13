/*
又叫发布订阅模式
一个被观察者管理所有依赖它的被观察物件,并且在本身的状态改变时主动发出通知
*/

function Foo() { };
Foo.prototype.bind = function (obj, events, fn) {//订阅者
    obj.listeners = obj.listeners || {};
    obj.listeners[events] = obj.listeners[events] || [];
    obj.listeners[events].push(fn)
}
Foo.prototype.start = function (obj, events) {//发布
    let args = Array.prototype.slice.call(arguments).slice(2);
    for (let i = obj.listeners[events].length; i--;) {
        obj.listeners[events][i].call(obj, ...args)
    }
}
function ScaleMethods(elem) {
    this.elem = elem;
    this.scale();
    this.wheel();
}
ScaleMethods.prototype.scale = function () {
    let downX = 0;
    let downY = 0;
    let downW = 0;
    let downH = 0;
    let _this = this;
    this.elem.onmousedown = function (e) {
        downX = e.pageX;
        downY = e.pageY;
        downW = _this.elem.offsetWidth;
        downH = _this.elem.offsetHeight;
        document.onmousemove = function (e) {
            _this.elem.style.width = e.pageX - downX + downW + 'px';
            _this.elem.style.height = e.pageY - downY + downH + 'px';
            o.start(_this, 'scale', _this.elem.offsetWidth, _this.elem.offsetHeight)
        };
        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return !1;
    }
}
ScaleMethods.prototype.wheel = function () {
    let _this = this;
    this.onmousewheel = function (e) {
        this.style.height = e.wheelDelta > 0 ? (this.offsetHeight - 10 + 'px') : (this.offsetHeight + 10 + 'px')
    }
}
let div1 = document.getElementById('div1');
let o = new Foo;
o.bind(div1, 'show', function () {
    console.log(123);
})
o.bind(div1, 'show', function () {
    console.log(789);
})
o.start(div1, 'show')

let s1 = new ScaleMethods(div1);
o.bind(s1, 'scale', (a, b) => div1.innerHTML = a + ',' + b)