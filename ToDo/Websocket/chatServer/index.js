const ws = require('nodejs-websocket')


const server = ws.createServer(connect => {
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


let count = 0



const server2 = ws.createServer(conn => {
    console.log('用户接入')
    count++
    conn.userName=`用户{count}加入了直播间`
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
}).listen(6789, () => console.log('服务器6789启动'))

