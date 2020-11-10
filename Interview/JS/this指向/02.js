var obj = {
    a: 10,
    b: {
        fn: function () {
            console.log(this);

        }
    }
}
var abc = obj.b.fn
window.obj.b.fn()//b
abc()//window
abc.call(obj)//obj



