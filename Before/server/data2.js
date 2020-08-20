const getresult = {
    pagenum: 1,
    pagesize: 10,
    key: "李白"
}

let str = JSON.stringify(getresult)

console.log(encodeURI(str))