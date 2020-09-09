const handler = {
    get(target, key) {
        return target[key];
    },
    set(target, key, value) {
        if (key in target) {
            //一些处理
            return;
        }
        target[key] = value;
        return true;
    },
    getPrototypeOf() {},
    setPrototypeOf() {},
    isExtensible() {},
    preventExtensions() {},
    getOwnPropertyDescriptor() {},
    defineProperty() {},
    has() {},
    deleteProperty() {},
    ownKeys() {},
    apply() {},
    construct() {}
}