var isHappy = function (n) {
    let cache = {};
    let res = sum(n);
    while (res != 1) {
        if (res in cache) return !!0;
        cache[res] = 1
        res = sum(res)
    }
    return !0;
};
var sum = n => {
    var n = n + '';
    var res = 0;
    for (let i of n) {
        res += i * i;
    }
    return res
}
console.log((sum(52)));