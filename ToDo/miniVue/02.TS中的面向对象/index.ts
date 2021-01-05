class Foo {
    //在ts中需要预先设置好实例属性和静态属性

    //可以在此预先设置好变量类型和默认值
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    sum() {
        return this.x + this.y
    }

}

class Bar extends Foo {
    x;
    y;
    z;
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    static showName='Foo'
    sum() {
        return this.x + this.y + this.z
    }
}
let o = new Foo(1, 2)
console.log(o.sum());
