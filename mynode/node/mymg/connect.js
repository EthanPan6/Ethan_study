// Connect to MongoDB
//Create a new app.js file and add the following code to try out some basic CRUD operations using the MongoDB driver.

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'mydb';
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    client.close();
});
/*
在断言规范中，还有如下几种检测方法。
1.ok():判断结果是否为真。
2.equal():判断实际值与期望值是否相等;
3.notEqual():判断实际值和期望值是否不相等；
4.deepEqual():判断实际值和期望值是深度相等（对象或数组的元素是否相等）；
5.notDeepEqual():判断实际值和期望值是否深度不相等；
6.strictEqual():判断实际值和期望值是否严格相等（=== ）；
7.notStrictEqual():判断实际值和期望值是否严格不相等（!==）；
8.throws():判断代码块是否抛出异常;
9.doseNotthrows():判断代码块是否没有抛出异常;
10.ifError():判断实际值是否为一个假值，如果实际值为真，抛出异常;
*/
