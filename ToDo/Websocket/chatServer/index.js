const ws = require('nodejs-websocket')

/*
const server1 = ws.createServer(connect => {
    console.log('用户接入')
    // console.log(connect);
    connect.on('text', data => {
        console.log('接受到信息:' + data);
        connect.send(data)
    })
    connect.on('close', (code, reason) => {
        console.log(code, reason);
        console.log('服务器关闭');
    })
    connect.on('error', (err) => {
        console.log('用户连接异常');
    })
}).listen(5678, () => console.log('服务器5678启动'))
*/


let count = 0
const server2 = ws.createServer(connect => {
    console.log('用户接入')
    count++
    connect.userName = `用户${count}`;
    broadcast(server2, {
        type: 0,
        msg: `${connect.userName}加入了聊天室`,
        time: new Date().toLocaleDateString()
    })
    connect.on('text', data => {
        console.log('接受到信息:' + data);
        // connect.send(data)只能个一个用户发消息
        broadcast(server2, data)
    })
    connect.on('close', (code, reason) => {
        count--;
        console.log(code, reason);
        broadcast(server2, `${connect.userName}离开了聊天室`)
        console.log('服务器关闭');
    })
    connect.on('error', (err) => {
        console.log('用户连接异常');
    })
}).listen(6789, () => console.log('服务器6789启动'))

function broadcast(server, msg) {//广播
    server.connections.forEach(item => {
        item.send(JSON.stringify(msg))
    })
}