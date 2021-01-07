/*
abstract: 用于创建抽象类的修饰符.
抽象类不能直接用于创建对象,作用于接口类似,不同的是,抽象类可以包含成员的实现细节
*/

abstract class Foo {
    readonly x: number = 0;
    y: number = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    public sum() {
        return this.x + this.y
    }

}

class Bar extends Foo {
    z: number = 0;
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    static showName = 'Foo'
    sum() {
        return this.x + this.y + this.z
    }
}
let o = new Bar(1, 2,5)
console.log(o.x);

console.log(o.sum());
console.log(Bar.showName);