
var obj = [1, 2, 3];

function f(o) {

    o = [2, 3, 4];
    o[1] = 's'

    // o[1] = 's'
    // o = 'olleh'
    // o = 3
}
f(obj);


console.log(obj);