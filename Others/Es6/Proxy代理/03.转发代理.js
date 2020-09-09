let target = {};
let p = new Proxy(target, {});

p.a = "无操作转发代理";

console.log(target); //{ a: '无操作转发代理' }