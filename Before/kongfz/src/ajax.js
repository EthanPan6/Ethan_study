const ajax = (opt) => {//ajax
    let defaultOpt = { //默认参数
        data: '',
        asyn: true,
        error: null
    }
    Object.assign(defaultOpt, opt);
    let xhr = new XMLHttpRequest();
    if (defaultOpt.type.toLowerCase() == 'get') {
        if (defaultOpt.data) {
            defaultOpt.url = defaultOpt.url + '?' + objToStr(defaultOpt.data);
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        xhr.send(null);
    } else {
        xhr.open('post', defaultOpt.url, defaultOpt.asyn);
        let data = objToStr(defaultOpt.data);
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
        xhr.send(data);
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                defaultOpt.success(xhr.responseText);
            } else {
                if (defaultOpt.error) {
                    defaultOpt.error(xhr.status);
                }
            }
        }
    }
}
function objToStr(obj) {//将切割好的网址拼接完整
    let wholearr = [];
    for (let i in obj) {
        let temp = i + '=' + obj[i]
        wholearr.push(temp);
    }
    let wholestr = wholearr.join('&');
    return wholestr;
}
export default ajax
