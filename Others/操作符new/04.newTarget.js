//new.target的作用：检查函数自身是否被new调用了

function User() {
    console.log(new.target)
}

//不使用new
User();//undefined

//使用new
new User();//function User { ... }