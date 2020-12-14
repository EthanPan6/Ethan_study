// 下面四个promise的结果

func().then(function () {
    return cb();
});

func().then(function () {
    cb();
});

func().then(cb());

func().then(cb);

