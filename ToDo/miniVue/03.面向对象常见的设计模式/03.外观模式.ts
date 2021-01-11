/*
定义了一个高层接口,把子类集合在一起,然后方便调用
*/
function  Foo() {

}
function Bar(){}
function Cat(){}

function Facade(){
    let o1=new Foo;
    let o2=new Bar;
    let o3=new Cat;
}
new Facade();


function Search(){}
Search.prototype.show=function(keyword:string){
    this.removeOldData();
    this.showNewData(keyword);
    this.updataPage()
};
Search.prototype.removeOldData=function(){}
Search.prototype.showNewData=function(keyword:string){}
Search.prototype.updataPage=function(){}

let result=new Search();
result.show('李白')