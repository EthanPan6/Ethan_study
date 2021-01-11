const value = { number: 10 };
let number = 2;
const multiply = function (x = { ...value }, y = number) {
    y++;
    console.log((x.number *= y));
};

multiply();
/*
x= { number: 10 },y=2
y=3
log(3*10) 
 */
multiply();

multiply(value, number);

multiply(value, number);