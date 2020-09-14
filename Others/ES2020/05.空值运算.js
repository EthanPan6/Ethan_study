// function fn(a) {
//     a = a || "hello world!";
//     console.log(a);
// }

fn(123);
fn(0) //传参了,但是被认为是假值,所以会增加开发成本
fn(false);
fn("");
fn(void 0);
fn(null)


//?? 空值运算符 不支持undefined和null,即还是会取默认值
function fn(a) {
    a = a ?? "hello world!";
    console.log(a);
}