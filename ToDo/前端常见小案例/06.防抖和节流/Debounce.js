function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        if (timer) { // 判断定时器是否存在，清除定时器
            clearInterval(timer)
        }
        timer = setTimeout(() => {// 重新调用setTimeout
            fn.apply(this, args)
        }, delay)
    }
}


