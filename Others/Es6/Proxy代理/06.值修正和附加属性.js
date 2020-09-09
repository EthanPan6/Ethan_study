let target = {
    browsers: ['IE', 'NetScape']
};
let handler = {
    get(obj, key) {
        if (key === "latestBrowser") {
            return obj.browsers[obj.browsers.length - 1]
        }
        return obj[key]
    },
    set(obj, key, value) {
        if (key === "latestBrowser") {
            obj.browsers.push(value)
            return !0;
        }
        typeof value === 'string' && (value = [value]);
        obj[prop] = value;
        return !0;
    }
}

let products = new Proxy(target, handler);

console.log(products.browsers);
