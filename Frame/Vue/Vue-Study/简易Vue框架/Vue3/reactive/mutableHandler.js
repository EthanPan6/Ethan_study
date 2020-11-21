import {
    isObject,
    hasOwnProperty
} from "../share/utils";
import {
    reactive
} from "./reactive";

function createGetter() {

    return function get(target, key, receiver) {
        console.log('响应式获取', target[key]);
        var res = Reflect.get(target, key, receiver)
        if (isObject(res)) {
            return reactive(res)
        }
        return res
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