import {
    isObject
} from '../share/utils.js';

function reactive(target) {
    return createReactiveObject(target, mutableHandler)
}

function createReactiveObject(target, baseHandler) {
    if (!isObject(target)) {
        return target
    }
}
export {
    reactive
}