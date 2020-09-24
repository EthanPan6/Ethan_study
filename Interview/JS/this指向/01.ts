interface Iuser {
    name: string,
    hi: () => void,
    bye: () => void
}


let user: Iuser = {
    name: "John",
    hi() {
        // alert(this.name);
        console.log(this);
    },
    bye() {
        alert("Bye");
    }
};

user.hi(); // 正常运行

// 现在让我们基于 name 来选择调用 user.hi 或 user.bye
(user.name == "John" ? user.hi : user.bye)(); // Error!