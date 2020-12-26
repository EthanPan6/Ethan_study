function throttle(fn, delay) {//传入需要节流的函数和延迟时间
    let last = 0;//上次触发的时间
    return (...args) => {
        let now = +Date.now();//最新时间
        console.log('节流函数被触发了');
        if (now > last + delay) {
            fn.apply(this, args);
            console.log(`函数${fn.name}被触发了`);
            last = now;//将这次时间变为下次判断的时间
        }
    }

}