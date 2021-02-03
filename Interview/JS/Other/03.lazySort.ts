function lazySort(arr) {
    const result = [];
    arr.forEach(element => {
        setTimeout(function () {
            result.push(element)
        }, [element])
    });
    return result
}
const newArray = lazySort([12, 36, 2, 8, 99, 10, 75, 36])

console.log(newArray);//异步完成才有结果输出
