const http=require('http')
//创建服务器
const server=http.createServer((request,response)=>{
//request:请求头和请求体(前端)
//response:响应头和响应体(后端)

response.writeHead('200')
response.write('hello')
response.end()



})
// const server=http.response()

//提供一个端口(如:3000)
server.listen(3000);
console.log('success')