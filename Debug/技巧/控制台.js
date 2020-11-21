//检测控制台的开启和关闭
//方案1:创建一个新标签,并使用defineproperty进行监听,当控制台触发了这个新标签的某个事件时,触发我们设置的事件
//方案2:监听窗口大小,当当前窗口大小的长(宽)小于最大窗口的长(宽),则默认控制台被打开


//实验代码
var x = document.createElement('div');
// var isOpening = false;
Object.defineProperty(x, 'id', {
    get: function () {
        // 在这里放入你的代码
        document.write('Console is opened');
    }
});
console.info(x);
console.clear()

window.onresize = function(){
    if ((window.outerHeight - window.innerHeight) > 100) {
        // console was opened (or screen was resized)
    }
}


// 封装
var ConsoleManager = {
    onOpen() {
        //打开控制台动作
        // alert("Console is opened")
        // open('http://www.baidu.com')
        // location.href = 'http://www.baidu.com'

        (function () { }
        ["constructor"]("debugger")()) //禁止调试

        //或者
        setInterval(() => {
            debugger
        })
    },
    onClose() {
        // alert("Console is closed")

    },
    init() {
        var self = this;
        var x = document.createElement('div');
        var isOpening = false,
            isOpened = false;
        Object.defineProperty(x, 'id', {
            get() {
                if (!isOpening) {
                    self.onOpen();
                    isOpening = true;
                }
                isOpened = true;
            }
        });
        setInterval(function () {
            isOpened = false;
            console.info(x);
            console.clear();
            if (!isOpened && isOpening) {
                self.onClose();
                isOpening = false;
            }
        }, 200)
    }
}
ConsoleManager.init();