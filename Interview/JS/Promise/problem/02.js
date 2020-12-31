const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });

}));

first().then((arg) => {
    console.log(arg);
});
console.log(4);
/*
打印顺序: 3 7 4 1 2 5

1. first()执行:3=>p=>7=>4=>p.resolve(1)=>first.resolve(2)=>setTimeout.log(5)=>promise只会返回一个resolve或者reject,所以p.resolve(6)不执行

*/