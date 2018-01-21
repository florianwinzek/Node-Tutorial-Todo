const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbClient) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connect to MongoDB server');

    var db = dbClient.db('TodoApp');

  /**  db.collection('Todos').insertOne({
        test: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
**/
/**
    db.collection('Users').insertOne({
        name: 'Florian',
        age: 25,
        location: '23562 Luebeck'
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    });
**/
    dbClient.close();
});