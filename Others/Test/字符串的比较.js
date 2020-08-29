function bj(s1, s2) {
    return s1 == s2 ? `${s1}=${s2}` : s1 > s2
}
console.log(bj('a', 'A')) //false
console.log(bj('a', 'B')) //a=a
console.log(bj('ab', 'aa')) //true
console.log(bj('aa', 'ab')) //falseAB

console.log('Zzdd4515'.codePointAt(5));