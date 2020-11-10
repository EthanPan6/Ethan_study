var number = {
    original: 0,
    get num() {
        console.log(`触发了set`);
        return this.original
    },
    set num(val) {
        console.log(`触发了set`);
        this.original += val
    }
}
console.log(number.num);
number.num = 9
console.log(number.num);
console.log(`-----------------------------------`);