const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'mydb';
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    findDocuments(db, () => {
        client.close();
    });
});
//查询全部
// const findDocuments = function (db, callback) {
//     // Get the documents collection
//     const collection = db.collection('test1');
//     // Find some documents
//     collection.find({}).toArray(function (err, docs) {
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(docs)
//         callback(docs);
//     });
// }
//条件查找
const findDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('test1');
    // Find some documents
    collection.find({ 'age': 19 }).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
}