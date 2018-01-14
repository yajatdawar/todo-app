const MongoClient = require('mongodb').MongoClient;


var user = {name:'Yajat',age : 20};
var {name} = user;
console.log(name);
MongoClient.connect('mongodb://localhost:27017/bits', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('bitsians').deleteMany({text:'hey there'}).then(function(result){console.log(result);});

//db.collection('bitsians').findOneAndDelete({text:'hey there'}).then(function(result){console.log(result)});
//db.close();
});
