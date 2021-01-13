/*
将操作封装成一个个的策略,根据不同的类型映射到不同的策略

简化判断流程
*/
function Foo() { }
Foo.prototype.show = function (obj) {
    obj.print();
};
function Bar() { }
Bar.prototype.print = function () {
    console.log('策略一');
};
function Cat() { }
Cat.prototype.print = function () {
    console.log('策略二');
};
var method = new Foo();
method.show(new Bar);
var validataList = {
    notNull: function (value, bool) {
        return (value !== '') == bool;
    },
    maxLength: function (value, maxlen) {
        return value.length < maxlen;
    }
};
function AddValidata(id, opts) {
    this.elem = document.getElementById(id);
    this.opts = opts;
}
AddValidata.prototype.isPass = function () {
    for (var key in this.opts) {
        if (!validataList[key](this.elem.value, this.opts[key])) {
            return !!0;
        }
    }
    return !0;
};
var btn = document.getElementById('btn');
var v1 = new AddValidata('input1', {
    notNull: !0,
    maxLength: 10
});
btn.onclick = function () {
    console.log(v1.isPass());
};
