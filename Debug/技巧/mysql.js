const mysql=require('mysql');

const DB_CONFIG={
    host:'主机名',
    port:0,//端口号
    user:'用户名',
    password:'密码',
    database:'数据库实例'
}

const dbserver=function(sql,arr,fn){
    let conn=mysql.createConnection(DB_CONFIG);
    conn.connect();
    conn.query(sql,arr,(err,result)=>{
        if(err) throw err;
        fn(result)
    });
    conn.end();
}