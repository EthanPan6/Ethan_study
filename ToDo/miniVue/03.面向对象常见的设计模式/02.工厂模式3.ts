/*
提供一个创建一系列相关对象的入口,统一了对象创建职责,创建对象时无需关心具体类

抽象工厂:一个工厂类可以对应多个产品类,对应产生多个实例对象
*/

function ajax(url,type){
    let result;
    let methods={
        get(){
            result=new Get(url)
        },
        post(){
            result=new Post(url)
        },
        jsonp(){
            result=new Jsonp(url)
        }
    }
    methods[type]()
    return result
}



let xhr=ajax(url,type);
xhr.done(console.log)
