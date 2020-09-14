var p1 = new Promise((suc, err) => {
    setTimeout(() => {
        suc()
    }, 1000)
});

var p2 = new Promise((suc, err) => {
    setTimeout(() => {
        // suc()
        err()
    }, 900)
});

//then中使用箭头函数可能会报错

// all 有一个报错,全部停止
Promise.all([p1, p2]).then(function () {
    console.log(arguments);
})

//正常运行
Promise.allSettled([p1, p2]).then(function () {
    console.log(arguments);
})