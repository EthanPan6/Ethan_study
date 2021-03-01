
//布尔
let isOk:boolean=false;
//数字
let a:number=12;
//字符串
let str:string='hello world';

//单类型数组
let arr1:number[]=[1,2,3,5];
let arr2:Array<number>=[12,5,9,5]

//多类型数组
let arr3:Array<number|boolean>=[12,5,9,5,true]

//指定类型数组----元组
let arr4:[string,number,boolean]=['s',1,true];


//枚举类型
enum pay_staus{
    未支付=0,支付=1,交易成功=2
}
//使用
let stat:pay_staus=pay_staus.交易成功//2

//any类型
let unknownlx:any;
unknownlx=true;
unknownlx=1;
unknownlx='true';
unknownlx=['true'];



