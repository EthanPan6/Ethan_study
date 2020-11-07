var obj = {
    a: 3,
    set add(val) {
        this.a += val
    },
    get read() {
        return this.a++
    }
}
console.log(obj.read);
console.log(obj.add = 5);
console.log(obj.read);
console.log(obj.read++);
console.log(++obj.read);
