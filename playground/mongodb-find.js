const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbClient) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connect to MongoDB server');
    var db = dbClient.db('TodoApp');
    
   /** db.collection('Todos').find({
        _id: new ObjectID('5a645955b249e8495184b0a0')
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count: ', count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //dbClient.close();
});