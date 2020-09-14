let obj = {};
obj.a; //undefined
// obj.a.b //undefined.b;
//TypeError:无法在undefined中取出属性b;


//?.运算符 适当的终止取出运算符=>如果前方属性为undefined或者null会立即终止运算

obj.a?.b