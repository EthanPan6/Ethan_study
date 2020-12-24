// 就是用call和apply实现继承
function A() {
    this.word = ['A', 'a']
}

function B() {
    A.call(this);
}
let res = new B();
res.word.push('@')
console.log(res);