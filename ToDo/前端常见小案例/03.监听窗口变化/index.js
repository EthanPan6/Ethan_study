window.onload = () => {
    console.log('页面加载完毕')
    watchChangeSize();
}
const watchSize = function () {
    let prev = Date.now();
    return function () {
        let now = Date.now();
        if (now - prev >= 3100) {
            console.log('页面大小改变')
            watchChangeSize();
            prev = now
        }
    }

}
// window.addEventListener('resize', watchSize())
window.onresize = watchSize()

const watchChangeSize = function () {
    const { clientWidth: width, clientHeight: height } = document.documentElement
    console.log(width, height);
    return {
        width, height
    }
}

