# 防抖和节流

防抖和节流其实都是在规避频繁触发回调导致大量计算，从而影响页面发生抖动甚至卡顿。简单的说将多次回调比如页面点击或ajax调用变为一次。防抖和节流的区别在于以第一次为准还是最后一次为准。

## 节流Throttle
在一段时间内，不论触发多少次调用，都以第一次为准。比如：输入框补全提示，只需要每两秒补全一次。

***功能实现***
主要思路利用时间戳判断，每次调用判断和上一次调用的时间差异确定是否需要调用。 throttle实际是一个工厂函数，可以将一个函数封装为一个带有节流功能的函数。
```js
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
```

## 防抖Debounce
在一段时间内，不论触发多少期回调，都已最后一次为准。比如：以用户拖拽改变窗口大小，触发 resize 事件为例，会触发组件重新布局，这里面只有最后一次调用是有意义的。

***功能实现***
实现的话可以使用定时器执行函数，新调用发生时如果旧调用没有执行就清除之前的定时器。
```js
function debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    // 判断定时器是否存在，清除定时器
    if (timer) {
      clearTimeout(timer);
    }

    // 重新调用setTimeout
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

```