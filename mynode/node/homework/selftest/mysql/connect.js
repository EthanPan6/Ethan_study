var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'list'
});

connection.connect();

// let age = 10//不安全
// connection.query(`SELECT * FROM user WHERE age=${age}`, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

connection.query(`SELECT * FROM user WHERE ?`, [user, {}], function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});


connection.end();