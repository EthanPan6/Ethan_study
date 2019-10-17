const express=require('express')
const superagent=require('superagent')

const app=express()

let hotNews=[];
let localNews=[];
let server=app.listen(3000,()=>{
    let host=server.address().address
    let port=server.address().port
    console.log('Your App is running at http://%s:%s', host, port)
})
app.get('/',(req,res)=>{
    res.send('Hello World!')
})