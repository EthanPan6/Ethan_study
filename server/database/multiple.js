const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';// Connection URL
const dbName = 'kongfz';// Database Name

// Use connect method to connect to the server
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server");
        });
    })
}

// 增
//query : [{},{},...]
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}

//remove
//query : {}
const remove = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.deleteOne(query, (err, result) => {
            err ? reject(err) : resolve(result);
        })
        client.close();
    })
}

//updata
//query : {}
const updata = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateOne(query, (err, result) => {
            err ? reject(err) : resolve(result);
        })
        client.close();
    })
}

// 查
//query : {}
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}

//导出
module.exports = {
    insert,
    remove,
    updata,
    find
}