var num = 1;
var time = null
function fn() {
    timer = setInterval(function () {
        console.log(num);
        console.log(timer);
        clearInterval(timer);
        time = null
    }, 1000);
};
fn();//1,1

