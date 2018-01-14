const MongoClient = require('mongodb').MongoClient;


var user = {name:'Yajat',age : 20};
var {name} = user;
console.log(name);
MongoClient.connect('mongodb://localhost:27017/bits', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

db.collection('bitsians').find({completed : false}).toArray().then(function(docs){
  console.log(JSON.stringify(docs,undefined,2));
},function(err){
  console.log('Unable to fetch the data')
})
db.close();
});
