//模块的导出

let a = "exports";

let fn = v => {
    console.log(v);
}
// exports.a = a;
// module.exports.a = a
module.exports = {
    a,
    fn
}

/*
使用exports时只能导出单个属性


module.exports 可以导出单个属性,也可以导出整个对象


*/