/*
类型	前缀	示例
数组	a	aValues
布尔型	b	bFound
浮点型（数字）	f	fValue
函数	fn	fnMethod
整型（数字）	i	iValue
对象	o	oType
正则表达式	re	rePattern
字符串	s	sValue
变型（可以是任何类型）	v	vValue
*/


//1. number类型
let iNum = 12;

//2. string类型
let sWord = "hello";

//3. boolean类型
let isOk = true;

//4. null，表示"没有对象"，即该处不应该有值。
//典型用法是：
// （1） 作为函数的参数，表示该函数的参数不是对象。
// （2） 作为对象原型链的终点。

let timer1 = null; //清除定时器


//5. undefined，表示"缺少值"，就是此处应该有一个值，但是还没有定义。
// （1）变量被声明了，但没有赋值时，就等于undefined。
// （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。
// （3）对象没有赋值的属性，该属性的值为undefined。
// （4）函数没有返回值时，默认返回undefined。
let unknown;


//6. symbol  表示独一无二的值--------ES6
// 定义对象的唯一属性名。ES5的对象属性名都是字符串，容易造成属性名的冲突。
let unique0 = Symbol();
let unique1 = Symbol("unique");

console.log(unique0, unique1); // Symbol() Symbol(unique)
console.log(typeof unique0, typeof unique1); //symbol symbol

/* 
注意：
1. Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。
2. Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。
3. 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
*/