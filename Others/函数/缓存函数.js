var memoize = function (f) {
  var cache = {};

  return function () {
    // console.log(arguments)
    var arg_str = JSON.stringify(arguments);
    // console.log(arg_str)
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);


    console.log(cache);

    return cache[arg_str];
  };
};

var squareNumber = memoize(function (x) {
  return x * x;
});

// console.log(JSON.stringify([1]))
console.log(squareNumber(4))
console.log(squareNumber(5))
console.log(squareNumber(6))
console.log(squareNumber(7))
console.log(squareNumber(8))






















/*
squareNumber(4)
=>
memoize(function (4) {
  return x * x;
});
=>
var memoize = function (f) {
  var cache = {};                                                      ==>  var cache = {};  

  return function () {
    console.log(arguments)                                        {'0':4}
    var arg_str = JSON.stringify(arguments);                           "{'0':4}"
    // console.log(arg_str)
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);     cache["{'0':4}"]=undefined|| f(4)=16
    // console.log(cache);

    return cache[arg_str];   //16
  };
};



 */