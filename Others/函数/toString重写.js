function add() {
    var _args = Array.prototype.slice.call(arguments)
    console.log(_args);
    var _adder = function () {
        _args.push(...arguments)
        return _adder
    }
    _adder.toString = function () {
        return _args.reduce((a, b) => a + b);
    }
    return _adder
}



function adds() {
    var _args = Array.from(arguments)
    console.log(_args);
    var _adder = function () {
        _args.push(...arguments)
        return _adder
    }
    _adder.toString = function () {
        return _args.reduce((a, b) => a + b);
    }
    return _adder
}





// console.log(add(1)(2)(3));
// console.log(add(1, 2, 3)(4));
console.log(add(1)(2)(3)(4)(5));
console.log(adds(1)(2)(3)(4)(5));
// console.log(add(1));