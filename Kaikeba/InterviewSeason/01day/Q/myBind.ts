Function.prototype.myBind = function () {
    if (typeof this !== 'function') {
        throw new Error('被修改的不是函数类型')
    }
    let _this = this;
    let [o, args] = [...arguments];
    return function () {
        _this.apply(o, [args, ...arguments])
    }
}

function func(x) {
    console.log(x, this.y)
}

func.myBind({ y: 'foo' })() //undefined "foo"
func.myBind()() //undefined undefined
func.myBind({ y: 'bar' }, 'foo')() //"foo" "bar"