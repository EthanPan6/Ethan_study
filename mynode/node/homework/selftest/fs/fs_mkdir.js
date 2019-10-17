var fs=require('fs')
fs.mkdir('logs',error=>{
    if(error){
        console.log(error)
    }else{
        console.log('success')
    }
})