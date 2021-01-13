//切换变量0和1
let toggle = 0;
// --- before ---
// if 判断
if (toggle) {
    toggle = 0;
} else {
    toggle = 1;
}
// 三目运算符
togle = toggle ? 0 : 1;

// --- after ---
toggle ^= 1;


/*
判断奇偶性
偶数 & 1 = 0
奇数 & 1 = 1
*/

// 快速创建 a 标签
// --- before ---
let b = `<a herf="www.google.com">google</a>`;

// --- after ---
let b = 'google'.link('www.google.com');

//快速取整
console.log(11.71 | 0)   // 11
0 | Math.random() * 100


//for 循环条件的简写
// --- before ---
for (let i = 0; i < arr.length; i++) {
    //code
}

// --- after ---
for (let i = arr.length; i--;) {
    // code
} // 注意 i-- 后面的分号别漏了