function add(m) {

    var temp = function (n) {
        return add(m + n);
    }

    temp.toString = function () {
        return m;
    }

    return temp;
};
let a = add(1)
let b = a(2)

console.log(a, b)