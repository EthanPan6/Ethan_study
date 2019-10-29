var ob1 = {
    age: 18
}
copy = (obj) => {
    return obj
}
var ob2 = copy(ob1);
ob2.age = 28
console.log(ob1 === ob2);
