class Foo {
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
let o = new Foo(1, 2)
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