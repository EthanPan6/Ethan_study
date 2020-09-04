let xhr = new XMLHttpRequest();

xhr.open('Get', url)

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        //处理成功的结果
    } else if (xhr.status !== 200 && xhr.readyState === 4) {
        //失败的结果
    }
}
xhr.send()



function Ajax(opt) {
    this.data = "" || opt.data;
    this.asyn = true,
    this.error = null,
    this.type = "get"

}
Ajax.prototype = {
    get() {

    },
    post() {

    }
}