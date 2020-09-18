function createGetter() {

    return function get(target, key, receiver) {
        console.log('响应式获取', target[key]);
        return Reflect.get(target, key, receiver)

    }
}

function createSetter() {
    return function set(target, key, value, receiver) {
        console.log('响应式设置' + key + '=' + value);
        return Reflect.set(target, key, value, receiver)
    }
}

function createDeleteProperty() {}

const get = createGetter()
const set = createSetter()
const mutableHandler = {
    get,
    set,

}

export {
    mutableHandler
}