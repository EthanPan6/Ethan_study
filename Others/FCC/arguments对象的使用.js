function destroyer() {
    // 删掉那些值
    let [start, ...deleteArr] = arguments
    console.log(start, deleteArr)
    let arr = start.filter(item => !deleteArr.includes(item));
    return arr;
}
;
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))