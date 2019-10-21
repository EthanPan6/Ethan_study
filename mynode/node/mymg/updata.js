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
    updateDocument(db, function () {
        client.close();
    });
});

const updateDocument = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('test1');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ name: 'john' }
        , { $set: { grade: 12 } }, function (err, result) {
            console.log(result.result.n)
            //result.result.n: 1成功  0失败
            // assert.equal(err, null);
            // assert.equal(1, result.result.n);
            // console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}