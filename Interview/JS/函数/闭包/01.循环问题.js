
function func1() {
    console.log('原题');
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000 * i);
    }
}
function func2() {
    console.log('闭包');
    for (var i = 0; i < 5; i++) {
        (function (j) {
            setTimeout(() => {
                console.log(j);
            }, 5000 * j);
        })(i)
    }
}
function func3() {
    console.log('setTimeout的三个参数');
    for (var i = 0; i < 5; i++) {
        setTimeout((i) => {
            console.log(i);
        }, 5000 * i, i);
    }
}
function func4() {
    console.log('let局部定义域');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, 5000 * i);
    }
}
func1()
func2()
func3()
func4()