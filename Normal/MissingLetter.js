function fearNotLetter(str) {
    let len = str.length
    let start = str[0].charCodeAt()
    let end = str[len - 1].charCodeAt()
    for (let i = start; i < end; i++) {
        if (i)return
    }
    return str
}
fearNotLetter("abce")//d
fearNotLetter("ghijlm")//k

// function fn(str) {
//     for (let index = 0; index < str.length; index++) {
//         if (str[index + 1].charCodeAt() !== str[index + 1].charCodeAt()) return String.fromCharCode(index + 1)

//     }
// }
// fn("ac")