### 2020/12/03

#### Cannot access XXX before initialization的报错

`Cannot access watchSize before initialization`的报错

```js
window.onload = () => {
    console.log('页面加载完毕')
    watchChangeSize();
}
// window.addEventListener('resize', watchSize())
window.onresize = watchSize()

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
const watchChangeSize = function () {
    const { clientWidth: width, clientHeight: height } = document.documentElement
    console.log(width, height);
    return {
        width, height
    }
}
```

**const/let**没有声明提前,需要将函数表达式改为函数声明式或者将该函数放在监听窗口变化前之前


### 2021/1/11  访问某个恶心人的网站

起因:进入某个看视频的小网站,进去以后出现一个带遮罩层的弹窗,点击弹窗的'X'失效,然后想通过控制台使得遮罩层`display:none`,打开控制台网站迅速跳转到另一个网站了

想出的解决方案:
+ 覆盖window里的location和history对象,使得它无法跳转
+ 创建一个iframe将该网站插入
+ 将该网站爬取下来,找到遮罩层的class或者id名,然后写一个插件将这个遮罩去掉
