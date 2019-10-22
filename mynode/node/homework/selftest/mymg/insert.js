//插入


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
    insertDocuments(db, () => {
        client.close();
    });
});

const insertDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('test1');
    // Insert some documents
    collection.insertMany([
        { name: 'han', age: 19, grade: 19 }
    ], (err, result) => {
        callback(result);
    });
}