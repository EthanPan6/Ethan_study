Array.prototype.myMap = function (callback/*, thisArg*/) {
    var T, A, k;
    if (this == null) {
        throw new TypeError('this is null or not defined');
    }
    var O = Object(this);//输入的对象
    var len = O.length >>> 0;
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
        T = arguments[1];//this指向
    }
    A = new Array(len);//新键一个长度与原数组相等的新数组
    k = 0;
    while (k < len) {
        var kValue, mappedValue;
        if (k in O) {
            kValue = O[k];
            mappedValue = callback.call(T, kValue, k, O);
            A[k] = mappedValue;//将处理后的元素放入新数组
        }
        k++;
    }
    return A;
};
let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.myMap(item => item + 1))