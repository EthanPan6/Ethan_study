/*
将一个类的接口转换成客户希望的另一个接口,使得原本由于接口不兼容导致不能一起工作的那些类一起工作
*/
function Adapter(class1, method) {
    return class1.prototype[method];
}
function Foo() {
    this.show = Adapter(Bar, 'show');
}
Foo.prototype.show = function () {
    console.log('两项插头');
};
function Bar() { }
Bar.prototype.show = function () {
    console.log('三项插头');
};
// let o = new Foo;
// o.show()
function Page() {
    var screen = window.innerWidth < 800 ? 'small' : 'normal';
    screen == 'small' && (this.show = Adapter(SmallPage, 'show'));
}
Page.prototype.show = function () {
    console.log('正常展示');
};
function SmallPage() { }
SmallPage.prototype.show = function () {
    console.log('小屏幕展示');
};
var page = new Page;
page.show();
