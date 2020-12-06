const http = require('http')
const fs=require('fs')
const app=http.createServer()

app.on('request',(req,res)=>{
    fs.readFile(__dirname+'/index.html',(err,data)=>{
        if(err){
            res.writeHead(500);
            return res.end()
        }
    })
})