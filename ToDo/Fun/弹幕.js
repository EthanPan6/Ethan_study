var list = document.getElementsByClassName('Barrage-list')[0]
var words = list.children
var chatBox = document.querySelector('.ChatSend-txt')
var chatButton = document.querySelector('.ChatSend-button ')
var blackWords = [' 为主播点了个赞']
var last = ''
var timer = null
timer = setInterval(() => {
    var newest = words[words.length - 1].outerText.split('：')[1]
    if (blackWords.includes(newest)) return
    // while (last != newest) {
    //     console.log(newest, last);
    //     last = newest
    //     chatBox.innerText = newest
    //     chatButton.click()
    // }
    output(last, newest).then(()=>{
        chatButton.click()
    })
}, 3000)

function output(last, newest) {
    return new Promise((res, rej) => {
        if (last == newest) {
            rej()
            return
        }
        last = newest
        chatBox.innerText = newest
        res()
    })
}