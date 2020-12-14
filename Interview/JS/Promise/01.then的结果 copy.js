let cbNumber = 0

function func() {
    return new Promise((res, rej) => {
        res('Promise的resolve')
    })
}

function cb() {
    cbNumber++
    console.log('我被执行了' + cbNumber + '次');
    return 'cb的返回值'
}

func().then(function () {
    return cb();
}).then(result => {
    console.log(result);
    console.log('***********1**************');
});

func().then(function () {
    cb();
}).then(result => {
    console.log(result);
    console.log('***********2**************');
});

func().then(cb()).then(result => {
    console.log(result);
    console.log('***********3**************');
});

func().then(cb).then(result => {
    console.log(result);
    console.log('***********4**************');
});

func().then('测试结论3').then(result => {
    console.log(result);
    console.log('***********5**************');
});
/*
结果:
    我被执行了1次
    我被执行了2次
    我被执行了3次
    我被执行了4次
    cb的返回值
    ***********1**************
    undefined
    ***********2**************
    Promise的resolve
    ***********3**************
    cb的返回值
    ***********3**************

结论:
    1. 在第一个Promise中,在回调函数中返回了cb函数,然后cb的结果返回给了下一个then
    2. 在第二个Promise中,回调函数虽然执行了cb函数,但是没有返回值,所以将undefined传给了下一个then
    3. 在第三个Promise中,没传入回调函数,而是将cb函数的执行结果传入,Promise会跳过这个then,直接将原结果传入下一个then
    4. 在第四个Promise中,直接将cb作为回调函数传入,效果与第一个相同

*/