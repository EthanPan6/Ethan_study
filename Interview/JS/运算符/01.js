let a = { n: 1 };
a.x = a = { n: 2 }

console.log(a.x);//undefined
/*
赋值运算顺序:从右到左
运算符'.'大于'='

a.x = a = { n: 2 }==>

先运算  a={n:2}
再运算  a.x={n:2}.x
结果    undefined

*/
