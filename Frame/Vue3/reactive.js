const isObject = (obj) => typeof obj === 'object'
//利用proxy
function reactive(obj) {
    //判断进来的是否为对象
    console.log(isObject(obj));
    if (!isObject(obj)) {
        return obj
    }
    return new Proxy(obj, {
        get(target, key) {
            const res = Reflect.get(target, key)
            console.log(`获取${res}`);
            return res

        },
        set(target, key, value) {
            const res = Reflect.set(target, key, value)
            console.log(`设置${res}`);
            return res
        },
        deleteProperty(target, key) {
            const res = Reflect.deleteProperty(target, key)
            console.log(`删除${res}`);
            return res

        }
    })
}

const effectStack = []
function effect(fn) {
    const e = createReactiveEffect()
    e()
}
function createReactiveEffect(fn) {
    const effect = function createReactiveEffect() {
        try {
            effectStack.push(effect)
        } finally { }
    }
}
const targetMap = new WeakMap(() => { })();
function track(target, key) {
    let effect = effectStack[effectStack.length - 1]
    if (effect) {
        let depMap = targetMap.get(target)
        if (!depMap) {
            depMap = new Map();
            targetMap.set(target, depMap)
        }
        let deps = depMap.get(key)
        if (!deps) {
            deps = new Set(() => { })();
            deps.set(key, deps)
        }
        deps.add(effect)
    }
}
function trigger(target, key) { }
// const obj = reactive({ foo: 'foo', b: { fo: 'fo' } })
// obj.foo
// obj.foo = 1
// obj.foo
// obj.bar = 'bar'
// obj.bar
// delete obj.bar
// obj.b.fo

