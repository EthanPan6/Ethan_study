var p=new Promise((res,rej)=>{
    setTimeout(()=>{
        var num=18
        res(num)
    },1000)
})
p.then(data=>{
    console.log(data);
})