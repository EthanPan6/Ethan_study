/*
将一个类的接口转换成客户希望的另一个接口,使得原本由于接口不兼容导致不能一起工作的那些类一起工作
*/

function Adapter(class1:Function,method:string){
    class1.prototype[method]
}
function Foo(){
    this.show=Adapter(Bar,'show')
}