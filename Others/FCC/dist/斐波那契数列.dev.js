"use strict";

//es6
function fibonacci(cc) {
  var r = 1;
  var r2 = 1;
  var fb = [1, 1];

  for (var i = 2; i < cc; i++) {
    var _ref = [r2, r + r2];
    r = _ref[0];
    r2 = _ref[1];
    fb.push(r2);
  }

  return fb;
}

console.log(fibonacci(5)); //递归

function finb2(i) {
  return i > 2 ? finb2(i - 1) + finb2(i - 2) : 1;
}

console.log(finb2(5)); //数组

function fib3(i) {
  var fibs = [1, 1];

  while (i > fibs.length) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }

  return fibs;
}

console.log(fib3(5));