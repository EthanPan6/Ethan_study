
//any类型
let x: any = 12;
x = "helllo Typescript !";
x = true;

let y: any = 4;
y.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
y.toFixed();    // 正确

let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;

//null 和 undefine

let num: number;
num = 1; // 运行正确
num = undefined;    // 运行错误
num = null;    // 运行错误