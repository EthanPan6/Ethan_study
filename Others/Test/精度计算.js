function s(a) {
    let s = a.toString();
    let dotPos = s.indexOf('.')
    let [
        before,
        after
    ] = [...s.split('.')]

    return {
        s,
        dotPos,
        before: parseInt(before),
        after: parseInt(after),
        len: after.length
    }
}


function calculator(a, b, fn) {
    let aObj = s(a);
    let bObj = s(b);
    console.log('原值:', a + b);
    return fn.call(null, aObj, bObj)

}

function add(a, b) {
    let before = (a.before + b.before);
    let after = 0
    if (a.len == b.len) {
        after = (a.after + b.after) / (10 ** a.len);
    } else if (a.len > b.len) {
        after = (a.after + b.after * (10 ** (a.len - b.len))) / (10 ** a.len);
    } else {
        after = (a.after * (10 ** (b.len - a.len)) + b.after) / (10 ** b.len);
    }

    return before + after
}
console.log('优化值:', calculator(0.1, 0.21, add));